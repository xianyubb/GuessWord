const gw = mc.newCommand("guessword", "猜词", PermType.Any);
gw.setAlias("gw");
gw.setEnum("op", ["op"]);
gw.mandatory("answer", ParamType.RawText);
gw.mandatory("action", ParamType.Enum, "op");
gw.overload(["action"]);
gw.overload(["answer"]);
gw.setCallback((_, _ori, out, res) => {
    const {player} = _ori;
    if (player) {
        if (res.name) {
            // answerfun
        }
    } else {
        out.error("此命令控制台不可执行!")
    }
});

