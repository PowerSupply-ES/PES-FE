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
    return (_jsxs(ThemeProvider, { theme: theme, children: [_jsx(CssBaseline, {}), _jsx(StyledBox, { children: _jsx(Tabs, { "aria-label": "Pipeline", value: index !== null ? index : undefined, onChange: (event, value) => {
                        // value가 string | number | null이므로, 10진수로 변환
                        if (value !== undefined && value !== null) {
                            const numericValue = typeof value === 'number' ? value : parseInt(value, 10);
                            // number타입일때 탭이동
                            if (!isNaN(numericValue)) {
                                toggleTab(numericValue);
                            }
                        }
                    }, children: _jsxs(StyledTabList, { children: [_jsx(Tab, { indicatorInset: true, value: 0, children: "\uBB38\uC81C" }), _jsx(Tab, { indicatorInset: true, value: 1, children: "\uACF5\uC9C0\uC0AC\uD56D" })] }) }) })] }));
};
export default MenuBar;
