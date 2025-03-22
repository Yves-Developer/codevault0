import Image from "next/image";
import Button from "./ui/Button";
import Input from "./ui/Input";

const Email = () => {
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
      <Input type="text" placeholder="Your Name" />
      <Input type="email" placeholder="Email" />
      <Button className="w-full">Get Instant Access</Button>
    </div>
  );
};

export default Email;
