'use client';

import AuthWrapper from '@/components/auth/AuthWrapper';
import RegisterForm from '@/components/auth/RegisterForm';

export default function RegisterPage() {
  return (
    <AuthWrapper title="Sign In" backButtonHref="/login">
        <RegisterForm />
    </AuthWrapper>
  );
}