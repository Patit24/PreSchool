import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="text-7xl animate-bounce">🎈</div>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-navy">
          Oops! Page Not Found
        </h1>
        <p className="font-body text-navy/70 text-base">
          It looks like this little adventure went off track. Let's head back to our happy preschool home!
        </p>
        <div>
          <Link
            to="/"
            className="btn-yellow text-sm py-3 px-6 shadow-button-yellow inline-flex items-center gap-2"
          >
            <Home className="w-4 h-4 text-navy" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
