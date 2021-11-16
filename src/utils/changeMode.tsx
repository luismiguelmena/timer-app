const changeMode = (setChecked:Function,checked:boolean,theme:any,setTheme:Function) => {
    setChecked(!checked)
    if (theme === "light") {
        setTheme("dark");
    } else {
        setTheme("light");
    }
  }
export default changeMode