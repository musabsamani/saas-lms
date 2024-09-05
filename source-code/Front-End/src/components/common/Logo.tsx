const Logo = () => {
    return (
        <div className="logo w-[110px] h-[75px] flex items-center justify-end rtl:justify-start">
            <div className="w-fit relative">
                <span className="absolute w-[50px] h-[50px] left-[-7px] top-[-7px] border-2 border-[#00fff0] rounded-sm rotate-[45deg] text-[#49BBBD] "></span>
                <span className="!z-[3] relative bold text-3xl tracking-widest">TOTC</span>
            </div>
        </div>
    );
}

export default Logo;
