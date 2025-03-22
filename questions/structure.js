window.structureQuestions = [
    // 理论题（30道）
    {
        question: "结构化程序设计的基本结构不包括以下哪个？",
        options: ["顺序结构", "选择结构", "循环结构", "跳跃结构"],
        answer: 3,
        explanation: "结构化程序设计的三个基本结构是：顺序结构、选择结构和循环结构"
    },
    {
        question: "关于顺序结构，以下说法错误的是？",
        options: ["从上到下执行", "不包含分支", "可以有函数调用", "必须单线执行"],
        answer: 3,
        explanation: "顺序结构虽然是从上到下执行，但可以包含并行操作或函数调用"
    },
    {
        question: "以下哪个不是选择结构的关键字？",
        options: ["if", "else", "switch", "while"],
        answer: 3,
        explanation: "while是循环结构的关键字，不是选择结构"
    },
    {
        question: "switch语句中case标签后面可以使用哪种类型？",
        options: ["整型", "浮点型", "字符串", "对象"],
        answer: 0,
        explanation: "C++中switch的case标签只能使用整型（包括字符型）常量表达式"
    },
    {
        question: "关于if-else结构，以下说法正确的是？",
        options: ["必须有else", "else必须在新行", "else总是与最近的if匹配", "if后必须有{}"],
        answer: 2,
        explanation: "else子句总是与最近的未匹配的if语句匹配"
    },
    {
        question: "以下哪个不是循环结构？",
        options: ["while", "do-while", "for", "goto"],
        answer: 3,
        explanation: "goto是跳转语句，不是循环结构"
    },
    {
        question: "关于while和do-while的区别，说法错误的是？",
        options: ["while先判断后执行", "do-while至少执行一次", "while可能一次都不执行", "do-while效率更高"],
        answer: 3,
        explanation: "do-while和while的效率取决于具体情况，不能说哪个更高"
    },
    {
        question: "for循环的三个表达式中，哪个是必须的？",
        options: ["初始化表达式", "条件表达式", "更新表达式", "都不是必须的"],
        answer: 3,
        explanation: "for循环的三个表达式都可以省略，如for(;;)表示无限循环"
    },
    {
        question: "以下哪种循环最适合处理未知循环次数的情况？",
        options: ["for", "while", "do-while", "都可以"],
        answer: 1,
        explanation: "while循环最适合处理循环次数未知的情况，因为它只关注循环条件"
    },
    {
        question: "关于break语句，以下说法错误的是？",
        options: ["可用于switch", "可用于循环", "可用于if", "可用于多重循环"],
        answer: 2,
        explanation: "break不能用于if语句，只能用于switch和循环结构"
    },
    {
        question: "continue语句的作用是什么？",
        options: ["结束整个循环", "跳转到循环开始", "结束本次循环", "退出程序"],
        answer: 2,
        explanation: "continue结束本次循环，继续执行下一次循环"
    },
    {
        question: "嵌套循环中的break会？",
        options: ["结束所有循环", "结束最外层循环", "结束当前循环", "编译错误"],
        answer: 2,
        explanation: "break只会结束包含它的当前循环，不影响外层循环"
    },
    {
        question: "以下哪个不是结构化程序设计的特点？",
        options: ["自顶向下", "模块化", "goto语句", "单一入口出口"],
        answer: 2,
        explanation: "结构化程序设计提倡避免使用goto语句"
    },
    {
        question: "关于switch语句，以下说法正确的是？",
        options: ["必须有default", "case顺序任意", "可以有多个default", "必须以break结束"],
        answer: 1,
        explanation: "case标签的顺序可以任意，不影响程序执行"
    },
    {
        question: "以下哪个不是良好的程序设计风格？",
        options: ["适当缩进", "添加注释", "使用goto", "模块化设计"],
        answer: 2,
        explanation: "使用goto会破坏程序的结构性，不是良好的设计风格"
    },
    {
        question: "关于循环嵌套，以下说法错误的是？",
        options: ["可以多层嵌套", "内外层可以不同", "最多嵌套三层", "可以共享变量"],
        answer: 2,
        explanation: "循环可以任意层数嵌套，没有固定限制"
    },
    {
        question: "以下哪个可以代替continue语句？",
        options: ["if-else", "break", "goto", "return"],
        answer: 0,
        explanation: "continue可以用if-else结构代替，跳过剩余语句"
    },
    {
        question: "关于return语句，以下说法错误的是？",
        options: ["可以返回值", "可以不返回值", "可以用在循环中", "必须在函数末尾"],
        answer: 3,
        explanation: "return语句可以在函数的任何位置，不必在末尾"
    },
    {
        question: "以下哪个不是结构化程序设计的优点？",
        options: ["易于理解", "易于维护", "执行效率高", "易于测试"],
        answer: 2,
        explanation: "结构化程序设计主要提高可读性和可维护性，不一定提高执行效率"
    },
    {
        question: "switch语句中的default子句应该放在？",
        options: ["最前面", "最后面", "任何位置", "必须在中间"],
        answer: 2,
        explanation: "default子句可以放在switch语句的任何位置"
    },
    {
        question: "以下哪种情况最适合使用do-while循环？",
        options: ["已知循环次数", "至少执行一次", "可能不执行", "循环次数不定"],
        answer: 1,
        explanation: "当循环体至少要执行一次时，最适合使用do-while循环"
    },
    {
        question: "关于循环控制变量，以下说法错误的是？",
        options: ["可以是整数", "可以是浮点数", "必须是递增", "应该避免在循环体中修改"],
        answer: 2,
        explanation: "循环控制变量可以递增也可以递减，没有固定要求"
    },
    {
        question: "以下哪个不是防止无限循环的方法？",
        options: ["设置计数器", "正确的循环条件", "适当的更新语句", "使用goto"],
        answer: 3,
        explanation: "使用goto不能有效防止无限循环，反而可能导致程序结构混乱"
    },
    {
        question: "关于循环优化，以下说法正确的是？",
        options: ["循环体越大越好", "尽量减少循环次数", "多用嵌套循环", "忽略循环变量类型"],
        answer: 1,
        explanation: "减少循环次数是一种重要的优化方法"
    },
    {
        question: "以下哪种情况最适合使用switch语句？",
        options: ["大量的if-else", "范围判断", "布尔条件", "浮点数比较"],
        answer: 0,
        explanation: "当有多个常量值需要比较时，switch比if-else更清晰"
    },
    {
        question: "关于程序块，以下说法错误的是？",
        options: ["可以嵌套", "有自己的作用域", "必须有名字", "可以声明变量"],
        answer: 2,
        explanation: "程序块不需要名字，用{}表示即可"
    },
    {
        question: "以下哪个不是结构化程序设计的目标？",
        options: ["可读性", "可维护性", "代码最少", "可靠性"],
        answer: 2,
        explanation: "结构化程序设计的目标是提高程序质量，而不是追求代码量最少"
    },
    {
        question: "关于选择嵌套，以下说法正确的是？",
        options: ["不能嵌套", "最多嵌套3层", "可以任意嵌套", "必须使用else"],
        answer: 2,
        explanation: "选择结构可以任意嵌套，没有层数限制"
    },
    {
        question: "以下哪个不是控制结构的复杂度指标？",
        options: ["嵌套深度", "分支数量", "代码行数", "变量名长度"],
        answer: 3,
        explanation: "变量名长度不是衡量控制结构复杂度的指标"
    },
    {
        question: "关于结构化程序设计的模块，以下说法错误的是？",
        options: ["功能单一", "相对独立", "尽量复杂", "便于维护"],
        answer: 2,
        explanation: "模块应该尽量简单，而不是复杂"
    },

    // 代码题（20道）
    {
        question: "以下代码的输出是什么？\nint x = 5;\nif(x > 0)\n    cout << \"Positive\";\nelse if(x < 0)\n    cout << \"Negative\";\nelse\n    cout << \"Zero\";",
        options: ["Positive", "Negative", "Zero", "无输出"],
        answer: 0,
        explanation: "x=5大于0，输出Positive"
    },
    {
        question: "这段代码会输出什么？\nint i = 1;\nwhile(i < 5) {\n    cout << i;\n    i++;\n}",
        options: ["1234", "12345", "2345", "1235"],
        answer: 0,
        explanation: "循环输出1到4，当i=5时条件不满足退出循环"
    },
    {
        question: "下面的代码输出什么？\nfor(int i = 0; i < 3; i++) {\n    for(int j = 0; j < 2; j++) {\n        cout << i + j;\n    }\n}",
        options: ["012345", "011223", "001122", "012234"],
        answer: 1,
        explanation: "外层循环i从0到2，内层j从0到1，每次输出i+j"
    },
    {
        question: "这段代码的结果是？\nint x = 2;\nswitch(x) {\n    case 1: cout << \"One\"; break;\n    case 2: cout << \"Two\";\n    case 3: cout << \"Three\"; break;\n    default: cout << \"Other\";\n}",
        options: ["Two", "TwoThree", "One", "Other"],
        answer: 1,
        explanation: "x=2匹配case 2，但没有break会继续执行case 3"
    },
    {
        question: "以下代码会输出什么？\nint sum = 0;\nfor(int i = 1; i <= 5; i++) {\n    if(i % 2 == 0) continue;\n    sum += i;\n}\ncout << sum;",
        options: ["15", "9", "6", "8"],
        answer: 1,
        explanation: "只累加奇数：1+3+5=9"
    },
    {
        question: "这段代码输出什么？\nint i = 0;\ndo {\n    cout << i;\n    i++;\n} while(i < 3);",
        options: ["012", "123", "01", "0123"],
        answer: 0,
        explanation: "do-while先执行再判断，输出0,1,2"
    },
    {
        question: "下面的代码输出什么？\nfor(int i = 0; i < 5; i++) {\n    if(i == 3) break;\n    cout << i;\n}",
        options: ["012", "0123", "01234", "0124"],
        answer: 0,
        explanation: "当i=3时break跳出循环，只输出0,1,2"
    },
    {
        question: "这段代码会输出什么？\nint x = 1;\nwhile(x < 10) {\n    cout << x;\n    x *= 2;\n}",
        options: ["1248", "12468", "123456789", "1357"],
        answer: 0,
        explanation: "x每次乘2：1,2,4,8，到16时退出循环"
    },
    {
        question: "以下代码的输出是什么？\nint i = 0;\nwhile(i < 3) {\n    i++;\n    if(i == 2) continue;\n    cout << i;\n}",
        options: ["123", "13", "12", "23"],
        answer: 1,
        explanation: "当i=2时continue跳过输出，所以只输出1和3"
    },
    {
        question: "这段代码输出什么？\nfor(int i = 1; i <= 3; i++) {\n    for(int j = 1; j <= i; j++) {\n        cout << \"*\";\n    }\n}",
        options: ["***", "******", "*****", "******"],
        answer: 2,
        explanation: "打印三角形图案：第一行1个*，第二行2个*，第三行3个*"
    },
    {
        question: "下面的代码结果是？\nint sum = 0;\nfor(int i = 1; i <= 5; i++) {\n    if(i > 3) break;\n    sum += i;\n}\ncout << sum;",
        options: ["15", "6", "10", "12"],
        answer: 1,
        explanation: "累加1到3：1+2+3=6，i=4时break"
    },
    {
        question: "这段代码会输出什么？\nint x = 2;\nswitch(x) {\n    default: cout << \"D\";\n    case 1: cout << \"A\"; break;\n    case 2: cout << \"B\";\n    case 3: cout << \"C\";\n}",
        options: ["BC", "ABC", "DC", "B"],
        answer: 0,
        explanation: "x=2匹配case 2，输出B，然后继续执行输出C"
    },
    {
        question: "以下代码输出什么？\nint i = 1;\nwhile(i <= 5) {\n    if(i % 2 == 0) {\n        i++;\n        continue;\n    }\n    cout << i++;\n}",
        options: ["135", "123", "13579", "246"],
        answer: 0,
        explanation: "只输出奇数：1,3,5"
    },
    {
        question: "这段代码的结果是？\nfor(int i = 0; i < 3; i++) {\n    for(int j = 0; j < 3; j++) {\n        if(i == j) break;\n        cout << i << j;\n    }\n}",
        options: ["0102", "010120", "012", "01021"],
        answer: 1,
        explanation: "当i=j时break内层循环，输出：01(i=0),02(i=1),无(i=2)"
    },
    {
        question: "下面的代码输出什么？\nint x = 5;\ndo {\n    x -= 2;\n    cout << x;\n} while(x > 0);",
        options: ["321", "3210", "531", "310"],
        answer: 1,
        explanation: "x每次减2：5->3->1->-1，输出3,1,-1"
    },
    {
        question: "这段代码会输出什么？\nint count = 0;\nfor(int i = 1; i <= 4; i++) {\n    for(int j = 1; j <= i; j++) {\n        count++;\n    }\n}\ncout << count;",
        options: ["10", "8", "16", "12"],
        answer: 0,
        explanation: "内层循环执行次数：1+2+3+4=10次"
    },
    {
        question: "以下代码的输出是什么？\nint x = 1;\nwhile(x < 50) {\n    cout << x;\n    x += x;\n}",
        options: ["12481632", "1248163264", "1234", "124816"],
        answer: 0,
        explanation: "x每次翻倍：1,2,4,8,16,32，到64时退出循环"
    },
    {
        question: "这段代码输出什么？\nfor(int i = 1; i <= 3; i++) {\n    if(i == 2) continue;\n    for(int j = 1; j <= 2; j++) {\n        cout << i;\n    }\n}",
        options: ["1122", "1133", "1233", "1123"],
        answer: 1,
        explanation: "i=2时跳过，所以只输出两次1和两次3"
    },
    {
        question: "下面的代码结果是？\nint i = 1;\ndo {\n    if(i % 2 == 0) {\n        i++;\n        continue;\n    }\n    cout << i++;\n} while(i <= 5);",
        options: ["135", "123", "13", "1345"],
        answer: 0,
        explanation: "只输出奇数：1,3,5"
    },
    {
        question: "这段代码会输出什么？\nint x = 3;\nswitch(x) {\n    case 1: cout << \"A\";\n    case 2: cout << \"B\";\n    case 3: cout << \"C\";\n    case 4: cout << \"D\";\n    default: cout << \"E\";\n}",
        options: ["CDE", "ABCDE", "C", "DE"],
        answer: 0,
        explanation: "从case 3开始执行，没有break所以继续执行到结束"
    }
]; 