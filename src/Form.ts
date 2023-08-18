

export async function AnswerForm(player: Player, QuesTion:string) {
    const af = mc.newCustomForm()
        .setTitle("GuessWord")
        .addLabel(`当前问题 : ${QuesTion}`)
        .addInput("请输入你的答案")
    player.sendForm(af, (pl, data) => {
        if (data) {
            log(data)
        } else {
            pl.tell("关闭了表单")
        }
    })
}