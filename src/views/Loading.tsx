import { Spin } from "antd";
import { ReactNode, Suspense } from "react";

interface LoadingProps {
  children: ReactNode;
}

const LoadingComponent = () => {
  return (
    <div className="flex min-w-screen min-h-screen items-center justify-center">
      <Spin size="large" />
    </div>
  );
};

const Loading = (props: LoadingProps) => {
  const { children } = props;
  return <Suspense fallback={<LoadingComponent />}>{children}</Suspense>;
};

export default Loading;
