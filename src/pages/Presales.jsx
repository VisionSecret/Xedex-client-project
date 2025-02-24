import { useState, useEffect } from "react";
import { Card, CardContent } from "../components/ui/Card";

const targetDate = new Date("2025-04-01T00:00:00").getTime(); // Change this to your presale end date

const Presales = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return (
    <div className="flex items-center justify-center h-[80vh] sm:min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 p-6 mt-12 sm:mt-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Exclusive Presale Event 🚀
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          Join now and secure your early access to our project!
        </p>

        {/* Countdown Timer Card */}
        <Card className="bg-white p-6 rounded-2xl shadow-lg shadow-purple-500 w-auto mx-auto">
          <CardContent className="flex justify-center space-x-6 text-center">
            {/* Days */}
            <div>
              <h3 className="text-4xl font-extrabold text-black">{timeLeft.days}</h3>
              <p className="text-gray-600 text-sm">Days</p>
            </div>

            {/* Hours */}
            <div>
              <h3 className="text-4xl font-extrabold text-black">{timeLeft.hours}</h3>
              <p className="text-gray-600 text-sm">Hours</p>
            </div>

            {/* Minutes */}
            <div>
              <h3 className="text-4xl font-extrabold text-black">{timeLeft.minutes}</h3>
              <p className="text-gray-600 text-sm">Minutes</p>
            </div>

            {/* Seconds */}
            <div>
              <h3 className="text-4xl font-extrabold text-black">{timeLeft.seconds}</h3>
              <p className="text-gray-600 text-sm">Seconds</p>
            </div>
          </CardContent>
        </Card>

        {/* Buy Now Button */}
        <button className="mt-6 px-6 py-3 bg-purple-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-purple-600 transition duration-300 hover:scale-105">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Presales;
