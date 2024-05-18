import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-4">{children}</main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        © 2024 Your Company
      </footer>
    </div>
  );
};

export default Layout;
