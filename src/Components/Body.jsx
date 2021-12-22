import { useContext } from "react";
import { themeContext } from "../Context/ThemeContextProvider";
import { styles } from "./styles";

export default function Body() {
  const [theme] = useContext(themeContext);
  const currentTheme = styles[theme];
  console.log(currentTheme);
  return (
    <>
      <div
        style={{
          backgroundColor: currentTheme.backgroundColor,
          color: currentTheme.color
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Blandit libero
        volutpat sed cras ornare arcu dui. Sagittis orci a scelerisque purus
        semper eget duis at. Morbi tempus iaculis urna id volutpat lacus.
        Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula.
        Ullamcorper sit amet risus nullam. Convallis a cras semper auctor neque
        vitae tempus quam pellentesque. Scelerisque viverra mauris in aliquam.
        Aliquam faucibus purus in massa tempor nec feugiat nisl. Lectus arcu
        bibendum at varius. Eu facilisis sed odio morbi. Cursus metus aliquam
        eleifend mi in nulla posuere. Eget duis at tellus at. Turpis in eu mi
        bibendum neque egestas congue quisque. Sagittis eu volutpat odio
        facilisis mauris sit amet massa. Penatibus et magnis dis parturient
        montes. Morbi tincidunt ornare massa eget egestas purus viverra accumsan
        in. Proin libero nunc consequat interdum varius sit. Eros in cursus
        turpis massa tincidunt dui ut. Ultrices dui sapien eget mi proin sed
        libero enim. Orci sagittis eu volutpat odio facilisis mauris sit amet.
        Vehicula ipsum a arcu cursus vitae. At ultrices mi tempus imperdiet
        nulla malesuada pellentesque elit eget. Nullam ac tortor vitae purus
        faucibus ornare suspendisse. Rutrum tellus pellentesque eu tincidunt.
        Nulla facilisi nullam vehicula ipsum a arcu cursus. Ut tortor pretium
        viverra suspendisse. At augue eget arcu dictum varius. Eget magna
        fermentum iaculis eu non. Turpis egestas pretium aenean pharetra magna
        ac placerat vestibulum lectus. Urna et pharetra pharetra massa massa
        ultricies. Cras pulvinar mattis nunc sed.
      </div>
      <button
        style={{
          backgroundColor: currentTheme.backgroundColor,
          color: currentTheme.color
        }}
      >
        Next Page
      </button>
    </>
  );
}
