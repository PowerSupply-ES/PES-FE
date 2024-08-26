import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ThemeProvider } from "styled-components";
import { CssBaseline } from "@mui/material";
import Tabs from "@mui/joy/Tabs";
import Tab from "@mui/joy/Tab";
import useMenu from "hooks/menu/useMenu";
import { StyledBox, theme, StyledTabList, } from "styles/styledComponent/Menu-styled";
const MenuBar = () => {
    // 훅 사용
    const { index, toggleTab } = useMenu();
    return (_jsxs(ThemeProvider, { theme: theme, children: [_jsx(CssBaseline, {}), _jsx(StyledBox, { children: _jsx(Tabs, { "aria-label": "Pipeline", value: index, onChange: (event, value) => toggleTab(value), children: _jsxs(StyledTabList, { children: [_jsx(Tab, { indicatorInset: true, children: "\uBB38\uC81C" }), _jsx(Tab, { indicatorInset: true, children: "\uACF5\uC9C0\uC0AC\uD56D" })] }) }) })] }));
};
export default MenuBar;
