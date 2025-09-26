import React from "react";


export default function Footer(): React.ReactElement {
  return (
    <footer className="py-8 px-6 bg-gray-800 border-t border-stone-800 flex flex-col items-center gap-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-stone-200">
          © 2025 <a href="" target="_blank" className="hover:text-emerald-500 hover:underline">BleakeDev</a>. Crafted with passion and emerald precision.
        </p> 
      </div>
    </footer>
  );
}