import { Button, createTheme, ThemeProvider } from "@mui/material";

type Props = {};

const UserProfile = (props: Props) => {
  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            "&.MuiButton-contained": {
              fontWeight: "bold",
              height: "2.5rem",
              borderRadius: "15px",
              backgroundColor: "#F1721A",
              "&:hover": {
                backgroundColor: "#FA9146",
              },
            },
          },
        },
      },
    },
  });

  return (
    <section className="px-[2rem] sm:px-[5rem] md:px-[3rem] lg:px-[10rem] xl:px-[15rem] 2xl:px-[20rem] py-14 grid grid-cols-3 md:grid-cols-4 bg-platinum">
      <div className="w-40 h-40 mx-auto md:mx-0 mb-8 md:mb-0 bg-gray-400 rounded-full col-span-3 md:col-span-1"></div>
      <div className="flex flex-col col-span-3 min-[400px]:col-span-2">
        <h1 className="pt-4 max-[500px]:text-2xl text-4xl text-pumpkin font-bold">Ethan Thompson</h1>
        <p className="">test123@gmail.com</p>
        <div className="pt-5 flex gap-12">
          <p className="">
            <span className="mr-1 font-semibold text-pumpkin">56</span>Recipes
          </p>
          <p className="">
            <span className="mr-1 font-semibold text-pumpkin">123</span>Followers
          </p>
        </div>
      </div>
      <div className="grid place-content-center max-[400px]:mt-8 max-[400px]:col-span-3 2xl:content-center 2xl:place-content-start">
        <ThemeProvider theme={theme}>
          <Button variant="contained" className="w-32" onClick={() => {}}>
            Follow
          </Button>
        </ThemeProvider>
      </div>
    </section>
  );
};

export default UserProfile;
