import Colors from "./Colors";

const Themes = {
  Dark: {
    App: {
      BackgroundColor: Colors.White
    },
    General: {
      Text: {
        FontBold: "bold",
        AmountColor: Colors.Green,
        FontXXBig: 20,
        FontXBig: 18,
        FontBig: 14,
        FontRegular: 12,
        FontSmall: 11
      },
      Image: {
        BorderColor: Colors.LightGray2,
        BorderWidth: 2
      },
      Border: {
        Width: 1
      },
      Link: {
        Color: Colors.Blue
      }
    },
    TabBar: {
      Icon: {
        SelectedColor: Colors.Blue,
        UnselectedColor: Colors.LightGray3
      }
    },
    HeaderBar: {
      BackgroundColor: Colors.DarkGray1,
      BorderColor: Colors.LightGray3,
      TextColor: Colors.White,
      IconColor: Colors.LightGreen1,
      SearchBoxBackgroundColor: Colors.Transparent,
      SearchBoxShadowColor: Colors.White
    },
    Modal: {
      BackgroundColor: Colors.Black
    },
    Toaster: {
      ContainerBackgroundColor: Colors.Transparent,
      BackgroundColor: Colors.Black,
      Color: Colors.White,
      Icon1Color: Colors.Green,
      Icon2Color: Colors.Red,
      Icon3Color: Colors.DarkGray1
    },
    ProductList: {
      Item: {
        BorderColor: Colors.LightGray1,
        BackgroundColor: Colors.White,
        RatingStarColor: Colors.Orange,
        AlternateTextColor1: Colors.Green,
        AlternateTextColor2: Colors.DarkGray1
      }
    },
    Basket: {
      NumericColumn: {
        BorderColor: Colors.LightGray2,
        BackgroundColor: Colors.LightGray1
      }
    },
    Swipe: {
      ContainerBackgroundColor: Colors.Pink,
      Button1BackgroundColor: Colors.LightGreen1,
      Button1IconColor: Colors.DarkGray1,
      Button2BackgroundColor: Colors.Pink,
      Button2IconColor: Colors.White,
      Button3BackgroundColor: Colors.LightGray1,
      Button3IconColor: Colors.Orange
    },
    Loading: {
      SpinnerColor: Colors.White,
      PacmanColor: Colors.DarkGray1
    }
  }
};

export default Themes.Dark;
