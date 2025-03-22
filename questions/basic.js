window.basicQuestions = [
    // 理论题（30道）
    {
        question: "以下哪个不是合法的C++标识符?",
        options: ["_value", "my-var", "count2", "firstName"],
        answer: 1,
        explanation: "标识符不能包含连字符(-),但可以包含下划线(_)和数字(不能作为开头)"
    },
    {
        question: "C++中的关键字有什么特点?",
        options: ["可以用作变量名", "全部大写", "不能用作标识符", "没有特殊含义"],
        answer: 2,
        explanation: "关键字是语言保留的特殊词,有特定含义,不能用作标识符"
    },
    {
        question: "C++程序的基本结构单位是什么?",
        options: ["函数", "类", "语句", "表达式"],
        answer: 0,
        explanation: "函数是C++程序的基本结构单位,每个C++程序至少包含一个main函数"
    },
    {
        question: "关于C++源文件的扩展名,以下说法正确的是?",
        options: ["必须是.cpp", "可以是.c", "可以是.cpp或.cxx等", "没有要求"],
        answer: 2,
        explanation: "C++源文件常用的扩展名包括.cpp、.cxx、.cc等"
    },
    {
        question: "C++程序的执行从哪里开始?",
        options: ["第一行代码", "main函数", "构造函数", "头文件"],
        answer: 1,
        explanation: "C++程序从main函数开始执行"
    },
    {
        question: "以下哪个不是C++的注释方式?",
        options: ["//", "/* */", "# ", "<!-- -->"],
        answer: 3,
        explanation: "C++支持单行注释(//)和多行注释(/* */),但不支持HTML风格的注释"
    },
    {
        question: "C++中的作用域运算符是什么?",
        options: ["->", ".", "::", "::>"],
        answer: 2,
        explanation: "::是C++的作用域运算符,用于访问命名空间或类的成员"
    },
    {
        question: "关于C++的main函数,以下说法错误的是?",
        options: ["必须返回int", "可以没有参数", "可以重载", "可以有多个返回点"],
        answer: 2,
        explanation: "main函数不能重载,一个程序只能有一个main函数"
    },
    {
        question: "C++中的命名空间主要用于解决什么问题?",
        options: ["提高性能", "避免命名冲突", "增加安全性", "简化代码"],
        answer: 1,
        explanation: "命名空间用于避免不同库或模块之间的命名冲突"
    },
    {
        question: "以下哪个不是C++的基本语句类型?",
        options: ["声明语句", "表达式语句", "复合语句", "模板语句"],
        answer: 3,
        explanation: "C++的基本语句类型包括声明语句、表达式语句、复合语句等,模板不是语句类型"
    },
    {
        question: "关于C++的预处理指令,以下说法正确的是?",
        options: ["以#开头", "可以缩进", "必须在main前", "可以没有"],
        answer: 0,
        explanation: "预处理指令必须以#开头,用于在编译前处理源代码"
    },
    {
        question: "C++中的块作用域是由什么界定的?",
        options: ["圆括号()", "方括号[]", "尖括号<>", "花括号{}"],
        answer: 3,
        explanation: "花括号{}用于界定块作用域"
    },
    {
        question: "以下哪个不是C++的基本输入输出流?",
        options: ["cin", "cout", "printf", "cerr"],
        answer: 2,
        explanation: "printf是C语言的输出函数,不是C++的输入输出流"
    },
    {
        question: "关于C++的头文件包含,以下说法错误的是?",
        options: ["可以嵌套包含", "可以重复包含", "必须在文件开头", "建议使用防重包含宏"],
        answer: 2,
        explanation: "头文件包含不必须在文件开头,但通常建议放在开头"
    },
    {
        question: "C++中的标准命名空间是?",
        options: ["std", "standard", "cpp", "default"],
        answer: 0,
        explanation: "std是C++的标准命名空间,包含了标准库中的所有组件"
    },
    {
        question: "以下哪个不是合法的C++语句结束符?",
        options: [";", "}", ":", ","],
        answer: 3,
        explanation: "C++语句通常以分号(;)结束,花括号(})用于结束块"
    },
    {
        question: "关于C++的代码缩进,以下说法正确的是?",
        options: ["必须使用tab", "必须使用空格", "不影响执行", "必须缩进"],
        answer: 2,
        explanation: "代码缩进只影响代码的可读性,不影响程序的执行"
    },
    {
        question: "C++中的using声明主要用于什么?",
        options: ["创建别名", "导入命名空间", "定义常量", "声明变量"],
        answer: 1,
        explanation: "using声明用于导入命名空间中的标识符"
    },
    {
        question: "以下哪个不是C++的基本程序结构?",
        options: ["顺序结构", "选择结构", "循环结构", "跳跃结构"],
        answer: 3,
        explanation: "C++的基本程序结构包括顺序结构、选择结构和循环结构"
    },
    {
        question: "关于C++的标识符长度,以下说法正确的是?",
        options: ["最多8个字符", "最多16个字符", "没有限制", "取决于编译器"],
        answer: 2,
        explanation: "C++标准没有限制标识符的长度"
    },
    {
        question: "C++中的左值和右值的主要区别是什么?",
        options: ["位置不同", "可赋值性", "数据类型", "使用场景"],
        answer: 1,
        explanation: "左值可以出现在赋值语句的左边,而右值只能出现在右边"
    },
    {
        question: "以下哪个不是C++的基本运算符类型?",
        options: ["算术运算符", "关系运算符", "逻辑运算符", "函数运算符"],
        answer: 3,
        explanation: "C++的基本运算符包括算术、关系、逻辑运算符等"
    },
    {
        question: "关于C++的运算符优先级,以下说法正确的是?",
        options: ["可以更改", "完全自定义", "固定不变", "没有优先级"],
        answer: 2,
        explanation: "C++运算符的优先级是固定的,不能更改"
    },
    {
        question: "C++中的表达式语句与普通语句的区别是什么?",
        options: ["没有区别", "有返回值", "必须以;结束", "不能嵌套"],
        answer: 1,
        explanation: "表达式语句会产生一个值,而普通语句不一定有返回值"
    },
    {
        question: "以下哪个不是C++的合法注释内容?",
        options: ["代码说明", "TODO标记", "版权信息", "可执行代码"],
        answer: 3,
        explanation: "注释不应包含可执行代码,而应该是对代码的解释说明"
    },
    {
        question: "关于C++的代码规范,以下说法错误的是?",
        options: ["提高可读性", "影响执行效率", "便于维护", "团队协作"],
        answer: 1,
        explanation: "代码规范不影响程序的执行效率,只影响代码的可读性和维护性"
    },
    {
        question: "C++中的语句块可以嵌套多少层?",
        options: ["最多3层", "最多8层", "最多16层", "没有限制"],
        answer: 3,
        explanation: "C++标准没有限制语句块的嵌套层数"
    },
    {
        question: "以下哪个不是良好的变量命名习惯?",
        options: ["使用驼峰命名", "使用下划线", "使用单个字母", "使用有意义的名称"],
        answer: 2,
        explanation: "应避免使用单个字母作为变量名,除非在简单循环中"
    },
    {
        question: "关于C++的代码注释,以下说法正确的是?",
        options: ["越多越好", "适度使用", "能不写就不写", "只注释复杂代码"],
        answer: 1,
        explanation: "注释应该适度使用,过多或过少都不利于代码维护"
    },
    {
        question: "C++中的语句块作用域的特点是什么?",
        options: ["全局可见", "块内可见", "文件可见", "程序可见"],
        answer: 1,
        explanation: "语句块中声明的变量只在该块内可见"
    },

    // 代码题（20道）
    {
        question: "以下哪段代码正确声明了一个常量?",
        options: [
            "let PI = 3.14;",
            "var PI = 3.14;",
            "const double PI = 3.14;",
            "#define PI 3.14"
        ],
        answer: 2,
        explanation: "在C++中使用const关键字声明常量是最规范的方式"
    },
    {
        question: "下列代码的输出结果是什么?\nint x = 5;\ncout << x++ << \" \" << x << endl;",
        options: ["5 5", "5 6", "6 6", "6 5"],
        answer: 1,
        explanation: "后缀自增运算符会在使用变量后才增加其值"
    },
    {
        question: "这段代码会输出什么?\nint a = 10;\nint b = 20;\nswap(a, b);\ncout << a << \" \" << b;",
        options: ["10 20", "20 10", "编译错误", "未定义行为"],
        answer: 2,
        explanation: "需要包含<utility>头文件才能使用swap函数"
    },
    {
        question: "以下代码的输出是什么?\nint x = 1;\n{\n    int x = 2;\n    cout << x;\n}\ncout << x;",
        options: ["1 1", "2 2", "2 1", "1 2"],
        answer: 2,
        explanation: "内部块中的x遮蔽了外部的x,但不影响外部x的值"
    },
    {
        question: "这段代码的结果是什么?\nint x = 10;\nint y = 3;\ncout << x/y << \" \" << x%y;",
        options: ["3 1", "3.33 1", "3 0", "3.33 0"],
        answer: 0,
        explanation: "整数除法得到商3,取模得到余数1"
    },
    {
        question: "下面的代码会输出什么?\nint x = 5;\nint y = ++x * 2;\ncout << x << \" \" << y;",
        options: ["5 10", "6 12", "6 10", "5 12"],
        answer: 1,
        explanation: "先将x增加到6,然后乘以2得到12"
    },
    {
        question: "这段代码输出什么?\nint a = 1;\nint b = 2;\nint c = 3;\ncout << (a > b ? b : c);",
        options: ["1", "2", "3", "编译错误"],
        answer: 2,
        explanation: "条件为假,返回c的值3"
    },
    {
        question: "以下代码会输出什么?\nint x = 10;\ncout << (x > 5 && x < 15);",
        options: ["true", "false", "1", "0"],
        answer: 2,
        explanation: "C++中,布尔值true输出为1,false输出为0"
    },
    {
        question: "这段代码的输出结果是?\nint x = 1;\nwhile(x < 3) {\n    cout << x;\n    x++;\n}",
        options: ["1", "12", "123", "13"],
        answer: 1,
        explanation: "循环输出1和2,当x=3时停止"
    },
    {
        question: "下面的代码输出什么?\nfor(int i = 0; i < 3; i++) {\n    if(i == 1) continue;\n    cout << i;\n}",
        options: ["012", "02", "13", "01"],
        answer: 1,
        explanation: "当i=1时跳过输出,只输出0和2"
    },
    {
        question: "这段代码会输出什么?\nint i = 0;\ndo {\n    cout << i;\n    i++;\n} while(i < 2);",
        options: ["0", "01", "12", "012"],
        answer: 1,
        explanation: "do-while循环至少执行一次,输出0和1"
    },
    {
        question: "以下代码的输出是什么?\nint x = 5;\nif(x > 0)\n    cout << \"A\";\nelse if(x < 0)\n    cout << \"B\";\nelse\n    cout << \"C\";",
        options: ["A", "B", "C", "AB"],
        answer: 0,
        explanation: "x大于0,执行第一个分支"
    },
    {
        question: "这段代码输出什么?\nint sum = 0;\nfor(int i = 1; i <= 3; i++)\n    sum += i;\ncout << sum;",
        options: ["3", "6", "9", "12"],
        answer: 1,
        explanation: "计算1+2+3的和"
    },
    {
        question: "下面的代码会输出什么?\nint x = 1;\nswitch(x) {\n    case 1: cout << \"A\";\n    case 2: cout << \"B\";\n    break;\n    default: cout << \"C\";\n}",
        options: ["A", "B", "AB", "C"],
        answer: 2,
        explanation: "没有break语句会导致继续执行下一个case"
    },
    {
        question: "这段代码的结果是?\nint count = 0;\nwhile(count < 3) {\n    cout << count++;\n}",
        options: ["012", "123", "234", "345"],
        answer: 0,
        explanation: "先输出count再增加其值"
    },
    {
        question: "以下代码会输出什么?\nint x = 10;\nif(x = 0)\n    cout << \"A\";\nelse\n    cout << \"B\";",
        options: ["A", "B", "10", "0"],
        answer: 1,
        explanation: "赋值表达式返回0,条件为假,执行else分支"
    },
    {
        question: "这段代码输出什么?\nint x = 5;\ncout << (x < 0 ? -x : x);",
        options: ["5", "-5", "0", "编译错误"],
        answer: 0,
        explanation: "条件为假,返回x的原值"
    },
    {
        question: "下面的代码输出什么?\nfor(int i = 0; i < 2; i++)\n    for(int j = 0; j < 2; j++)\n        cout << i+j;",
        options: ["0123", "1234", "0112", "0122"],
        answer: 2,
        explanation: "外层循环i分别为0,1,内层j分别为0,1,输出i+j"
    },
    {
        question: "这段代码的输出结果是?\nint i = 0;\nwhile(i < 5) {\n    if(i == 2) break;\n    cout << i++;\n}",
        options: ["01", "012", "0123", "01234"],
        answer: 0,
        explanation: "当i=2时跳出循环,只输出0和1"
    },
    {
        question: "以下代码会输出什么?\nint x = 1;\nint y = 2;\ncout << (x != y) << (x < y) << (x > y);",
        options: ["111", "110", "100", "101"],
        answer: 1,
        explanation: "不等于为1,小于为1,大于为0"
    }
]; 