import { Button, Form, Input, message } from "antd";
import type { FormProps } from "antd";
import GlobalModal from "../GlobalModal";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { errorAlert } from "@/lib/utils/errorAlert";
import PageHeading from "./PageHeading";

type FieldType = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};
const ChangePassword = ({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
}) => {
  const [form] = Form.useForm();
  const { updateUser, token } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      setIsLoading(true);
      const res = await fetch("/api/auth/change-password", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentPassword: values.currentPassword,
          newPassword: values.newPassword
        }),
      });

      if (!res.ok) {
        throw new Error("Password change failed");
      }

      const data = await res.json();
      if (data.success) {
        message.open({
          type: "success",
          content: "Password changed successfully!",
          duration: 3,
        });
        form.resetFields();
        setIsModalOpen(false);
      } else {
        throw new Error(data.message || "Password change failed");
      }
    } catch (error) {
      errorAlert({ error: error as Error });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <GlobalModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}>
      <div className="p-4">
        <PageHeading
          backPath={"/auth"}
          title={"Change Password"}
          hideIcon={true}
        />
        <p className=" drop-shadow text-[#464343] my-3">
          Your password must be 8-10 character long.
        </p>
        <Form
          form={form}
          name="normal_login"
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          requiredMark={false}
          onFinish={onFinish}
        >
          <Form.Item
            label={<span className="font-medium text-base">Old Password</span>}
            name="currentPassword"
            rules={[
              {
                required: true,
                message: "Please input old password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password size="large" placeholder="**********" />
          </Form.Item>
          <Form.Item
            label={<span className="font-medium text-base">New Password</span>}
            name="newPassword"
            rules={[
              {
                validator(_, value) {
                  if (!value) {
                    return Promise.reject("New password is required!");
                  }
                  const pattern =
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/;
                  if (!pattern.test(value)) {
                    return Promise.reject(
                      "Include uppercase, lowercase, number, special character!"
                    );
                  }
                  if (value.length < 12) {
                    return Promise.reject("Must be at least 12 characters!");
                  }
                  return Promise.resolve();
                },
              },
            ]}
            hasFeedback
          >
            <Input.Password size="large" placeholder="**********" />
          </Form.Item>
          <Form.Item
            label={
              <span className="font-medium text-base">
                Confirm New Password
              </span>
            }
            name="confirmPassword"
            rules={[
              {
                required: true,
                message: "Please Re-Enter new password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("newPassword") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The new password that you entered do not match!")
                  );
                },
              }),
            ]}
            hasFeedback
          >
            <Input.Password size="large" placeholder="**********" />
          </Form.Item>
          <div className="text-end">
            <Link href={`/forget-pass`}>
              <Button size="small" type="link" color="pink" variant="link">
                Forgot Password ?
              </Button>
            </Link>
          </div>
          <div className="w-full flex justify-center pt-4 ">
            <Button
              loading={isLoading}
              type="primary"
              size="large"
              htmlType="submit"
              className="w-full px-2 "
            >
              Save Password
            </Button>
          </div>
        </Form>
      </div>
    </GlobalModal>
  );
};

export default ChangePassword;