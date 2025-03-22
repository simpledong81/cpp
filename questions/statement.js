window.statementQuestions = [
    // 理论题（30道）
    {
        question: "以下哪个不是C++的基本语句类型？",
        options: ["选择语句", "循环语句", "跳转语句", "指针语句"],
        answer: 3,
        explanation: "C++的基本语句类型包括选择语句、循环语句、跳转语句等，指针不是语句类型"
    },
    {
        question: "关于if语句，以下说法错误的是？",
        options: ["可以没有else", "可以嵌套", "必须有else", "可以有多个else if"],
        answer: 2,
        explanation: "if语句可以没有else部分，不是必需的"
    },
    {
        question: "switch语句中case标签后面可以是什么类型？",
        options: ["只能是整数", "可以是任何类型", "只能是字符", "必须是常量表达式"],
        answer: 3,
        explanation: "case标签后面必须是常量表达式，通常是整数或字符常量"
    },
    {
        question: "以下哪个不是C++的循环语句？",
        options: ["for", "while", "do-while", "repeat-until"],
        answer: 3,
        explanation: "C++支持for、while和do-while循环，不支持repeat-until循环"
    },
    {
        question: "关于break语句，以下说法正确的是？",
        options: ["只能用于循环", "只能用于switch", "可用于循环和switch", "可用于任何语句"],
        answer: 2,
        explanation: "break语句可以用于终止循环或switch语句"
    },
    {
        question: "continue语句的作用是什么？",
        options: ["终止程序", "终止循环", "跳过本次循环", "跳转到指定位置"],
        answer: 2,
        explanation: "continue语句用于跳过当前循环的剩余部分，继续下一次循环"
    },
    {
        question: "return语句可以出现在哪里？",
        options: ["只能在main函数中", "只能在函数末尾", "函数中的任何位置", "循环中"],
        answer: 2,
        explanation: "return语句可以出现在函数中的任何位置，用于返回值并结束函数"
    },
    {
        question: "关于goto语句，以下说法正确的是？",
        options: ["推荐使用", "提高代码可读性", "不建议使用", "提高执行效率"],
        answer: 2,
        explanation: "goto语句会破坏程序的结构性，不建议在现代C++编程中使用"
    },
    {
        question: "do-while循环与while循环的主要区别是什么？",
        options: ["执行效率", "语法结构", "至少执行一次", "没有区别"],
        answer: 2,
        explanation: "do-while循环会先执行循环体再检查条件，因此至少执行一次"
    },
    {
        question: "for循环的三个表达式是否都必须存在？",
        options: ["都必须存在", "都可以省略", "只能省略一个", "只能省略两个"],
        answer: 1,
        explanation: "for循环的初始化、条件和增量表达式都可以省略"
    },
    {
        question: "switch语句中的default分支是否必须有？",
        options: ["必须有", "可以没有", "只能在最后", "只能在最前"],
        answer: 1,
        explanation: "default分支是可选的，用于处理所有case都不匹配的情况"
    },
    {
        question: "以下哪个不是if语句的合法形式？",
        options: ["if(x)", "if(x>0)", "if(x,y)", "if(x==1)"],
        answer: 2,
        explanation: "if语句的条件必须是一个布尔表达式，不能是逗号表达式"
    },
    {
        question: "关于循环嵌套，以下说法错误的是？",
        options: ["可以任意嵌套", "内层break只影响内层循环", "可以使用continue", "必须使用不同类型的循环"],
        answer: 3,
        explanation: "循环嵌套可以使用相同或不同类型的循环，没有限制"
    },
    {
        question: "switch语句中漏掉break会怎样？",
        options: ["编译错误", "运行错误", "继续执行下一个case", "终止程序"],
        answer: 2,
        explanation: "如果case中没有break，会继续执行下一个case的代码，这称为穿透"
    },
    {
        question: "以下哪个不是循环控制语句？",
        options: ["break", "continue", "return", "switch"],
        answer: 3,
        explanation: "break和continue是循环控制语句，switch是选择语句"
    },
    {
        question: "关于空语句，以下说法正确的是？",
        options: ["不允许使用", "只包含分号", "必须有注释", "会报错"],
        answer: 1,
        explanation: "空语句只包含一个分号，是合法的C++语句"
    },
    {
        question: "复合语句（语句块）的特点是什么？",
        options: ["必须有返回值", "必须有条件", "由花括号包围", "不能嵌套"],
        answer: 2,
        explanation: "复合语句由花括号包围，可以包含多条语句"
    },
    {
        question: "以下哪种情况不需要使用break？",
        options: ["switch的最后一个case", "循环中断", "switch的所有case", "跳出多层循环"],
        answer: 0,
        explanation: "switch的最后一个case如果没有后续代码，可以省略break"
    },
    {
        question: "关于循环语句的执行顺序，以下说法错误的是？",
        options: ["while先判断后执行", "do-while先执行后判断", "for循环可以省略条件", "循环体必须是单条语句"],
        answer: 3,
        explanation: "循环体可以是单条语句或复合语句"
    },
    {
        question: "if-else语句的else分支与哪个if匹配？",
        options: ["最近的if", "第一个if", "最后一个if", "任意if"],
        answer: 0,
        explanation: "else与最近的未匹配的if配对，这称为悬垂else问题"
    },
    {
        question: "以下哪个不是选择语句的合法条件？",
        options: ["x == 1", "x = 1", "x != 0", "x > 1"],
        answer: 1,
        explanation: "赋值表达式不应该作为条件，应该使用比较表达式"
    },
    {
        question: "关于循环终止条件，以下说法正确的是？",
        options: ["必须是布尔值", "可以是任何表达式", "必须是比较表达式", "不能使用变量"],
        answer: 1,
        explanation: "任何表达式都可以作为循环条件，会被转换为布尔值"
    },
    {
        question: "以下哪个语句不能单独使用？",
        options: ["if", "while", "do-while", "case"],
        answer: 3,
        explanation: "case标签必须在switch语句内使用"
    },
    {
        question: "关于switch语句的case顺序，以下说法正确的是？",
        options: ["必须按值递增", "必须按值递减", "没有顺序要求", "必须连续"],
        answer: 2,
        explanation: "case标签的顺序没有要求，可以任意排列"
    },
    {
        question: "以下哪种循环最适合处理未知次数的循环？",
        options: ["for", "while", "do-while", "都可以"],
        answer: 1,
        explanation: "while循环最适合处理循环次数在运行时才能确定的情况"
    },
    {
        question: "关于continue语句，以下说法错误的是？",
        options: ["跳过当前循环", "可以用在任何循环中", "终止整个循环", "继续下一次循环"],
        answer: 2,
        explanation: "continue只跳过当前循环的剩余部分，不会终止整个循环"
    },
    {
        question: "以下哪个不是语句块的特性？",
        options: ["可以嵌套", "创建新的作用域", "必须有return", "可以为空"],
        answer: 2,
        explanation: "语句块不必须包含return语句"
    },
    {
        question: "关于switch的default位置，以下说法正确的是？",
        options: ["必须在最后", "必须在最前", "可以在任何位置", "不能使用"],
        answer: 2,
        explanation: "default分支可以放在switch语句的任何位置"
    },
    {
        question: "以下哪个不是循环语句的组成部分？",
        options: ["初始化", "条件判断", "循环体", "异常处理"],
        answer: 3,
        explanation: "循环语句主要由初始化、条件判断和循环体组成"
    },
    {
        question: "关于if-else嵌套，以下说法正确的是？",
        options: ["最多嵌套3层", "不允许嵌套", "可以任意嵌套", "必须使用花括号"],
        answer: 2,
        explanation: "if-else语句可以任意嵌套，没有层数限制"
    },

    // 代码题（20道）
    {
        question: "以下代码的输出是什么？\nint x = 1;\nif(x > 0)\n    cout << \"A\";\n    cout << \"B\";",
        options: ["A", "B", "AB", "无输出"],
        answer: 2,
        explanation: "由于缩进不当，第二个cout不属于if语句，总是会执行"
    },
    {
        question: "这段代码会输出什么？\nint i = 0;\nwhile(i < 3)\n    cout << i;\n    i++;",
        options: ["012", "无限循环", "0", "编译错误"],
        answer: 1,
        explanation: "由于缩进错误，i++不在循环体内，导致死循环"
    },
    {
        question: "下面的代码输出什么？\nint x = 2;\nswitch(x) {\n    case 1: cout << \"A\";\n    case 2: cout << \"B\";\n    case 3: cout << \"C\";\n}",
        options: ["A", "B", "BC", "ABC"],
        answer: 2,
        explanation: "从匹配的case开始，由于没有break会一直执行到结束"
    },
    {
        question: "这段代码的结果是？\nfor(int i = 0; i < 3; i++)\n    for(int j = 0; j < i; j++)\n        cout << i;",
        options: ["", "22", "233", "123"],
        answer: 1,
        explanation: "外层第一次循环i=0时内层不执行，i=2时执行两次"
    },
    {
        question: "以下代码会输出什么？\nint x = 1;\ndo {\n    cout << x++;\n} while(x < 1);",
        options: ["无输出", "1", "12", "无限循环"],
        answer: 1,
        explanation: "do-while至少执行一次，输出1后x=2，条件不满足退出"
    },
    {
        question: "这段代码输出什么？\nint i = 0;\nwhile(i < 3) {\n    if(i == 1) continue;\n    cout << i++;\n}",
        options: ["012", "02", "无限循环", "01"],
        answer: 2,
        explanation: "当i=1时，continue跳过增量导致死循环"
    },
    {
        question: "下面的代码会输出什么？\nfor(int i = 0; i < 2; i++)\n    if(i == 1)\n        break;\n    else\n        cout << i;",
        options: ["0", "1", "01", "无输出"],
        answer: 0,
        explanation: "当i=0时输出0，i=1时break退出循环"
    },
    {
        question: "这段代码的输出结果是？\nint x = 2;\nswitch(x) {\n    default: cout << \"A\";\n    case 1: cout << \"B\";\n    case 2: cout << \"C\";\n}",
        options: ["A", "C", "AC", "ABC"],
        answer: 2,
        explanation: "先执行default，然后由于没有break继续执行到结束"
    },
    {
        question: "以下代码会输出什么？\nint i = 0;\nfor(; i < 3; i++) {\n    if(i == 1) break;\n    cout << i;\n}",
        options: ["0", "01", "012", "无输出"],
        answer: 0,
        explanation: "输出0后，i=1时break退出循环"
    },
    {
        question: "这段代码输出什么？\nint x = 1;\nif(x = 2)\n    cout << \"A\";\nelse\n    cout << \"B\";",
        options: ["A", "B", "AB", "编译错误"],
        answer: 0,
        explanation: "赋值表达式返回2，转换为bool为true，执行if分支"
    },
    {
        question: "下面的代码输出什么？\nint i = 0;\nwhile(i++ < 3)\n    cout << i;",
        options: ["012", "123", "234", "0123"],
        answer: 1,
        explanation: "先比较后增加，输出增加后的值"
    },
    {
        question: "这段代码的结果是？\nfor(int i = 0; i < 3; cout << i++) {}",
        options: ["012", "123", "无输出", "编译错误"],
        answer: 0,
        explanation: "for循环的增量表达式可以是任何表达式"
    },
    {
        question: "以下代码会输出什么？\nint x = 1;\nif(x > 0)\n    if(x < 0)\n        cout << \"A\";\n    else\n        cout << \"B\";",
        options: ["A", "B", "AB", "无输出"],
        answer: 1,
        explanation: "else与最近的if匹配，x>0且x≮0，输出B"
    },
    {
        question: "这段代码输出什么？\nint i = 0;\ndo {\n    cout << i;\n    i++;\n    if(i == 2) break;\n} while(i < 5);",
        options: ["01", "012", "0123", "01234"],
        answer: 0,
        explanation: "输出0,1后i=2，break退出循环"
    },
    {
        question: "下面的代码会输出什么？\nfor(int i = 0; i < 2; i++)\n    for(int j = 0; j < 2; j++)\n        if(i == j)\n            cout << i;",
        options: ["0", "1", "01", "00"],
        answer: 2,
        explanation: "当i=j时输出i，分别是0和1"
    },
    {
        question: "这段代码的输出结果是？\nint x = 2;\nswitch(x) {\n    case 1: cout << \"A\"; break;\n    case 2: cout << \"B\"; break;\n    default: cout << \"C\";\n}",
        options: ["A", "B", "C", "BC"],
        answer: 1,
        explanation: "x=2匹配case 2，输出B后break退出"
    },
    {
        question: "以下代码会输出什么？\nint i = 0;\nwhile(i < 3)\n    cout << i++ << \" \";",
        options: ["0 1 2", "1 2 3", "0 1 2 3", "无限循环"],
        answer: 0,
        explanation: "先输出后增加，直到i=3退出循环"
    },
    {
        question: "这段代码输出什么？\nfor(int i = 0; i < 3; i++)\n    if(i % 2) continue;\n    else cout << i;",
        options: ["02", "13", "01", "012"],
        answer: 0,
        explanation: "只输出偶数，即0和2"
    },
    {
        question: "下面的代码输出什么？\nint x = 1;\nif(x == 1)\n    cout << \"A\";\nelse if(x > 0)\n    cout << \"B\";\nelse\n    cout << \"C\";",
        options: ["A", "B", "C", "AB"],
        answer: 0,
        explanation: "x==1为真，执行第一个分支后结束"
    },
    {
        question: "这段代码的结果是？\nint i = 0;\ndo i++; while(i < 3);\ncout << i;",
        options: ["0", "2", "3", "4"],
        answer: 2,
        explanation: "循环3次后i=3，然后输出"
    }
]; 