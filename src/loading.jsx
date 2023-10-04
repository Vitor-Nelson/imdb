import Image from "next/image";

export default function loading() {
    return (
      <div className="flex justify-center">
        <Image className="h-96" src="/public/Rolling-1s-200px.svg" alt="loading..."/>
      </div>
    );
  }