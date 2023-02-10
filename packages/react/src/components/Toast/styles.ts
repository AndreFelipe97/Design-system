import { styled } from "../../styles";

export const ToastContainer = styled("div", {
  height: "$20",
  width: "$80",
  borderRadius: "$sm",
  padding: "$3 $5",
  background: "$gray800",
  display: "flex",
  justifyContent: "space-between",

  svg: {
    height: "$5",
    width: "$5",
    color: "$gray200",
    marginTop: 10,
  },
});

export const ToastContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
});

export const ToastTitle = styled("span", {
  fontFamily: "$default",
  fontSize: "$xl",
  fontWeight: 700,
  lineHeight: "$short",
  letterSpacing: "0em",
  color: "$white",
});

export const ToastDescription = styled("span", {
  fontFamily: "$default",
  fontSize: "$sm",
  fontWeight: 400,
  lineHeight: "$base",
  letterSpacing: "0em",
  color: "$gray200",
});
