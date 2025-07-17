import axios from "axios";
import Menu from "@/components/menu/menu";
import Header from "@/components/main/header/header";

export default function Home({ active }: { active: boolean }) {

  return (
    <>
      <div className="absolute right-0 w-[81.6%] h-[100vh] px-10 py-7">
        <Header></Header>
      </div>
      <Menu activeBtn={active}></Menu>
    </>
  );
}

export async function getServerSideProps(context) {

  console.log(context.resolvedUrl)

  let activeBtn

  if (context.resolvedUrl == "/") {
    activeBtn = true
  }

  return {
    props: {
      active: activeBtn
    },
  };
}
