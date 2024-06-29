export default function Layout({
  children,
  user,
  analaytics,
  comments,
}: {
  children: React.ReactNode;
  analaytics: React.ReactNode;
  user: React.ReactNode;
  comments: React.ReactNode;
}) {
  return (
    <>
      {children}
      {user}
      {analaytics}
      {comments}
    </>
  );
}
