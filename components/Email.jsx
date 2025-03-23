"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "./ui/Button";
import Input from "./ui/Input";
import { Loader, Loader2 } from "lucide-react";

const Email = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);

  // Check if location is cached in localStorage
  const getLocation = async () => {
    const cachedLocation = localStorage.getItem("userLocation");

    if (cachedLocation) {
      // If location is cached, parse and use it
      setLocation(JSON.parse(cachedLocation));
      console.log("Using cached location:", JSON.parse(cachedLocation));
    } else {
      try {
        const res = await fetch("https://ipapi.co/json");
        const data = await res.json();
        if (data.error) {
          console.error("Error fetching location:", data.error);
        } else {
          // Cache the response in localStorage
          localStorage.setItem("userLocation", JSON.stringify(data));
          setLocation(data);
          console.log("Fetched and cached location:", data);
        }
      } catch (error) {
        console.error("Error fetching location:", error);
      }
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          name,
          country: location?.country_name,
          city: location?.city,
          groupId: "149315520584222551",
        }),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error("Error subscribing:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="h-full order-1 custom:order-2 p-8 bg-secondary flex gap-4 flex-col justify-center items-center">
      <div className="h-24 mb-4">
        <Image
          src="/free-gift.webp"
          alt="Free Gift"
          width={459}
          height={273}
          quality={100}
          className="w-full h-full object-cover"
          priority
        />
      </div>
      <h2 className="text-2xl font-bold text-white text-center">
        A quick-start guide to building apps.
      </h2>
      <p className="text-center">
        Maecenas faucibus mollis interdum. Sed posuere consectetur
      </p>
      <form onSubmit={handleSubmit} className="flex gap-4 flex-col w-full">
        <Input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? (
            <Loader2 className="animate-spin" />
          ) : (
            "Get Instant Access"
          )}
        </Button>
      </form>
    </div>
  );
};

export default Email;
