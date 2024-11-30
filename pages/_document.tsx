import { Children, ReactElement } from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import { AppRegistry } from "react-native";


// Follows the setup for react-native-web:
// https://necolas.github.io/react-native-web/docs/setup/#root-element
// Plus additional React Native scroll and text parity styles for various
// browsers.
// Force Next-generated DOM elements to fill their parent's height
const style = `
html, body, #__next {
  -webkit-overflow-scrolling: touch;
}
#__next {
  display: flex;
  flex-direction: column;
  height: 100%;
}
html {
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
}
body {
  overflow-y: auto;
  overscroll-behavior-y: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -ms-overflow-style: scrollbar;
}
`;

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    // Register the main component for React Native Web
    AppRegistry.registerComponent("main", () => Main);

    // Get styles from React Native Web
    const { getStyleElement } = AppRegistry.getApplication("main");
    const page = await ctx.renderPage();

    // Combine custom styles with React Native Web styles
    const styles = [
      <style
        key="react-native-style"
        dangerouslySetInnerHTML={{ __html: style }}
      />,
      getStyleElement(),
    ];

    // Return the initial props with custom styles
    return { ...page, styles: Children.toArray(styles) };
  }

  render(): ReactElement {
    return (
      <Html style={{ height: "100%" }}>
        <Head />
        <body style={{ height: "100%", overflow: "hidden" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}