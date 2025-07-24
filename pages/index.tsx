import axios from "axios";
import userModel from "@/models/user";
import isConnect from "@/utils/db";
import Menu from "@/components/menu/menu";
import Header from "@/components/main/header/header";
import Table from "@/components/main/table/table";

export default function Home({ active,users }: { active: boolean,users: any }) {

  return (
    <>
      <div className="absolute right-0 w-[81.6%] h-[100vh] px-10 py-7 bg-[#f3f4f6] overflow-auto">
        <Header></Header>
        <Table allUsers={users}></Table>
      </div>
      <Menu activeBtn={active}></Menu>
    </>
  );
}

export async function getServerSideProps(context: any) {
  isConnect()
  let activeBtn

  if (context.resolvedUrl == "/") {
    activeBtn = true
  }

  let users = await userModel.find({})

  return {
    props: {
      active: activeBtn,
      users: JSON.parse(JSON.stringify(users))
    },
  };
}
