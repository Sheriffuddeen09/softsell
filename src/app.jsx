import { useState } from 'react';
import { Sun, Moon, Upload, DollarSign, CreditCard, Shield, Zap, Smile, Clock } from 'lucide-react';
import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import logo from './image/softsell.png'
const exampleQuestions = [
  'How do I sell my license?',
  'Is there a fee to resell software?',
  'How long does the process take?',
];


export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! Ask me anything about reselling software licenses.' },
  ]);

  const handleToggle = () => setDarkMode(!darkMode);

  useEffect(() =>{
    AOS.init({duration: 2000})
}, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMessage = { sender: 'user', text: input };
    const botReply = { sender: 'bot', text: "That's a great question! Our team will assist you shortly." };
    setMessages([...messages, userMessage, botReply]);
    setInput('');
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 font-sans">
        <header className="flex items-center shadow-md justify-between p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="text-3xl font-bold italic inline-flex items-center space-x-2">
        <img
    src={logo}
    alt="logo"
    className="w-10 h-10 object-contain inline-block"
  />
          <p>SoftSell</p>
        </div>

           <button onClick={handleToggle} className="p-2 rounded-md bg-gray-200 dark:bg-gray-700">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </header>

        <main className="max-w-5xl mx-auto p-8">
          {/* Hero Section */}
          <div
          data-aos="fade-up"
          className="text-center py-16">
            <h1 className="text-4xl font-extrabold mb-4">Turn Unused Software Into Revenue</h1>
            <p className="text-lg mb-6">Resell your unused software licenses quickly and securely. No hassle, no hidden fees.</p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">Sell My Licenses</button>
          </div>

          {/* How It Works */}
          <div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 text-center my-16"
            data-aos="zoom-out"
          >
            <div className="flex flex-col items-center">
              <Upload size={40} className="mb-4 text-blue-600" />
              <h3 className="font-semibold text-lg">Upload License</h3>
              <p className="text-sm mt-2">Easily upload your unused software license information in minutes.</p>
            </div>
            <div className="flex flex-col items-center">
              <DollarSign size={40} className="mb-4 text-green-600" />
              <h3 className="font-semibold text-lg">Get Valuation</h3>
              <p className="text-sm mt-2">Receive a competitive quote based on real-time market demand.</p>
            </div>
            <div className="flex flex-col items-center">
              <CreditCard size={40} className="mb-4 text-purple-600" />
              <h3 className="font-semibold text-lg">Get Paid</h3>
              <p className="text-sm mt-2">Get your payment fast through your preferred payout method.</p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div
          data-aos="zoom-out"
          className="text-center py-16"
          >
            <h2 className="text-2xl font-bold text-center mb-8">Why Choose Us</h2>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                <Shield size={32} className="mx-auto text-blue-500 mb-2" />
                <p className="font-semibold">Secure Process</p>
                <p className="text-sm mt-1">End-to-end encrypted and safe resale environment.</p>
              </div>
              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                <Zap size={32} className="mx-auto text-yellow-500 mb-2" />
                <p className="font-semibold">Fast Turnaround</p>
                <p className="text-sm mt-1">We process license resale within 24–48 hours.</p>
              </div>
              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                <Smile size={32} className="mx-auto text-green-500 mb-2" />
                <p className="font-semibold">User-Friendly</p>
                <p className="text-sm mt-1">Simple dashboard and chat support for every user.</p>
              </div>
              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                <Clock size={32} className="mx-auto text-indigo-500 mb-2" />
                <p className="font-semibold">24/7 Support</p>
                <p className="text-sm mt-1">Our support team is available round the clock.</p>
              </div>
            </div>
          </div>

            {/* Testimonials */}
          <div
          data-aos="zoom-in"
          className="text-center py-16"
          >
            <h2 className="text-2xl font-bold text-center mb-8">What Our Customers Say</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <p className="mb-2 italic">“ResellWare made it incredibly easy to sell our unused licenses. The payout was fast and fair.”</p>
                <p className="font-semibold">Jane Doe, IT Manager at TechNova</p>
              </div>
              <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <p className="mb-2 italic">“I never thought reselling software would be this simple. Great support and seamless process!”</p>
                <p className="font-semibold">Michael Lee, CTO at SoftStack Inc.</p>
              </div>
            </div>
          </div>

          {/* Contact / Lead Form */}
          <div
          data-aos="fade-up"
          className="text-center py-16"
          >
            <h2 className="text-2xl font-bold text-center mb-8">Get in Touch</h2>
            <form className="grid gap-4 max-w-xl mx-auto">
              <input required className="p-3 rounded border dark:border-gray-700 dark:bg-gray-800" placeholder="Name" />
              <input required type="email" className="p-3 rounded border dark:border-gray-700 dark:bg-gray-800" placeholder="Email" />
              <input className="p-3 rounded border dark:border-gray-700 dark:bg-gray-800" placeholder="Company" />
              <select className="p-3 rounded border dark:border-gray-700 dark:bg-gray-800">
                <option value="">Select License Type</option>
                <option value="OS">Operating System</option>
                <option value="Office">Office Suite</option>
                <option value="Security">Security Software</option>
                <option value="Other">Other</option>
              </select>
              <textarea required className="p-3 rounded border dark:border-gray-700 dark:bg-gray-800" rows={4} placeholder="Message"></textarea>
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Submit</button>
            </form>
          </div>


          {/* Example Questions */}
          <div className="mb-6" data-aos="fade-right">
            <h2 className="text-xl font-semibold mb-2">Common Questions</h2>
            <ul className="list-disc list-inside">
              {exampleQuestions.map((q, i) => <li key={i}>{q}</li>)}
            </ul>
          </div>

          {/* Chat Section */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg" data-aos="flip-right">
            <div className="h-64 overflow-y-auto space-y-4 mb-4">
              {messages.map((msg, i) => (
                <div key={i} className={`text-sm ${msg.sender === 'bot' ? 'text-left' : 'text-right'}`}>
                  <span className={`inline-block px-4 py-2 rounded-lg ${msg.sender === 'bot' ? 'bg-blue-100 dark:bg-blue-900' : 'bg-green-200 dark:bg-green-700'}`}>
                    {msg.text}
                  </span>
                </div>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                className="flex-1 p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
                placeholder="Ask a question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send</button>
            </form>
          </div>
        </main>

        <footer className="text-center py-4 bold border-t border-gray-200 dark:border-gray-700 text-sm">
          &copy; 2025 Softsell. All rights reserved.
        </footer>
        
      </div>
    </div>
  );
}