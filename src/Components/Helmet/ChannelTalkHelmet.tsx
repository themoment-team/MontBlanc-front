import { Helmet } from "react-helmet";

const ChannelTalkHelmet: React.FC = () => {
  return (
    <Helmet>
      <script type="text/javascript">
        {`(function () {
                var w = window;
                if (w.ChannelIO) {
                    return (window.console.error || window.console.log || function () {})(
                        "ChannelIO script included twice."
                    );
                }
                var ch = function () {
                    ch.c(arguments);
                };
                ch.q = [];
                ch.c = function (args) {
                    ch.q.push(args);
                };
                w.ChannelIO = ch;
                function l() {
                    if (w.ChannelIOInitialized) {
                        return;
                    }
                    w.ChannelIOInitialized = true;
                    var s = document.createElement("script");
                    s.type = "text/javascript";
                    s.async = true;
                    s.src = "https://cdn.channel.io/plugin/ch-plugin-web.js";
                    s.charset = "UTF-8";
                    var x = document.getElementsByTagName("script")[0];
                    x.parentNode.insertBefore(s, x);
                }
                if (document.readyState === "complete") {
                    l();
                } else if (window.attachEvent) {
                    window.attachEvent("onload", l);
                } else {
                    window.addEventListener("DOMContentLoaded", l, false);
                    window.addEventListener("load", l, false);
                }
                })();
                ChannelIO("boot", {
                    pluginKey: "${process.env.REACT_APP_CHANNEL_TALK_KEY}",
                });`}
      </script>
    </Helmet>
  );
};
export default ChannelTalkHelmet;
