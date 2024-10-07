import Navbar from '../components/Navbar';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-light'>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
