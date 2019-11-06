const quest = {
    status: {
        killCount: 0,
        eggCount: 0,
        woolCount: 0,
        milkCount: 0
    },
    quests: [
        {
            questName: "Kill the monster!",
            questDetail: "น้องแกะกำลังเดือดร้อน! วอนพรี่ฝ้ายช่วยหนูด้วย",
            condition: function (killCount) {
                if (killCount >= 5) {
                    this.questStatus = true;
                }
            },
            questStatus: false
        },
        {
            questName: "Collect egg",
            questDetail: "เก็บไข่ไก้ให้ครบ ;w;",
            condition: function (eggCount) {
                if (eggCount >= 5) {
                    this.questStatus = true;
                }
            },
            questStatus: false
        },
        {
            questName: "Collect wool",
            questDetail: "เก็บขนแกะให้ครบ ;w;",
            condition: function (woolCount) {
                if (woolCount >= 5) {
                    this.questStatus = true;
                }
            },
            questStatus: false
        },
        {
            questName: "Collect milk",
            questDetail: "เก็บนมวัวให้ครบ ;w;",
            condition: function (milkCount) {
                if (milkCount >= 5) {
                    this.questStatus = true;
                }
            },
            questStatus: false
        }
    ]
};

export default quest;