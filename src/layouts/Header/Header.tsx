import Text from "../../components/text";

const Header = () => {
  return (
      <div className="min-w-full items-center justify-between py-4 flex bg-white pl-[200px] pr-[80px] fixed shadow-[10px_0px_10px_-5px_black] z-[2]">
        <Text className="text-[#195A89] font-bold text-[30px]" style={{letterSpacing:"3px"}}>Dashboard</Text>
        <img src="/icons/Profile.png" alt="profil" width={45}/>
      </div>
  );
};

export default Header;
