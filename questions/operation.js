window.operationQuestions = [
    // 理论题（30道）
    {
        question: "C++中，以下哪个不是算术运算符？",
        options: ["+", "-", "*", "?"],
        answer: 3,
        explanation: "C++的算术运算符包括+、-、*、/、%，?是条件运算符"
    },
    {
        question: "关于自增运算符(++)，以下说法正确的是？",
        options: ["前缀和后缀完全相同", "只能用于整数", "可以用于指针", "不能用于常量"],
        answer: 2,
        explanation: "自增运算符可以用于整数、浮点数和指针类型"
    },
    {
        question: "以下哪个运算符优先级最高？",
        options: ["=", "+", "*", "()"],
        answer: 3,
        explanation: "圆括号()的优先级最高，可以改变表达式的计算顺序"
    },
    {
        question: "关于除法运算符(/)，以下说法错误的是？",
        options: ["整数相除得到整数", "可能产生溢出", "总是得到精确结果", "除数不能为0"],
        answer: 2,
        explanation: "除法运算不一定得到精确结果，整数除法会舍弃小数部分"
    },
    {
        question: "C++中，求余运算符(%)的操作数可以是什么类型？",
        options: ["任何数值类型", "只能是整数", "包括浮点数", "字符类型"],
        answer: 1,
        explanation: "求余运算符只能用于整数类型操作数"
    },
    {
        question: "以下哪个不是关系运算符？",
        options: ["<", ">", "==", "="],
        answer: 3,
        explanation: "=是赋值运算符，不是关系运算符"
    },
    {
        question: "关于逻辑运算符，以下说法正确的是？",
        options: ["&&和||优先级相同", "!的优先级最低", "支持短路求值", "不能连续使用"],
        answer: 2,
        explanation: "C++的逻辑运算符支持短路求值，可以提高效率"
    },
    {
        question: "位运算符可以用于哪种类型？",
        options: ["任何类型", "整数类型", "浮点类型", "字符串类型"],
        answer: 1,
        explanation: "位运算符只能用于整数类型，对二进制位进行操作"
    },
    {
        question: "以下哪个是C++的条件运算符？",
        options: ["?", "?:", "if", "switch"],
        answer: 1,
        explanation: "?:是C++的条件运算符，也称为三目运算符"
    },
    {
        question: "关于赋值运算符，以下说法错误的是？",
        options: ["可以连续使用", "返回左值", "优先级较高", "不能重载"],
        answer: 2,
        explanation: "赋值运算符的优先级较低，比大多数运算符优先级低"
    },
    {
        question: "以下哪个不是复合赋值运算符？",
        options: ["+=", "-=", "**=", "*="],
        answer: 2,
        explanation: "C++没有**=运算符，这是其他语言中的幂运算赋值符"
    },
    {
        question: "关于运算符优先级，以下说法正确的是？",
        options: ["可以自定义", "编译时确定", "运行时确定", "与操作数有关"],
        answer: 1,
        explanation: "运算符优先级是在编译时确定的，不能更改"
    },
    {
        question: "以下哪个运算符不能重载？",
        options: ["+", "-", ".", "[]"],
        answer: 2,
        explanation: "成员访问运算符.不能被重载"
    },
    {
        question: "关于sizeof运算符，以下说法错误的是？",
        options: ["返回字节数", "是一元运算符", "可以用于表达式", "运行时计算"],
        answer: 3,
        explanation: "sizeof是编译时运算符，在编译时计算大小"
    },
    {
        question: "位移运算符对于负数的行为是？",
        options: ["未定义", "与正数相同", "总是得到0", "依赖编译器"],
        answer: 3,
        explanation: "负数的位移操作行为依赖于具体的编译器实现"
    },
    {
        question: "以下哪个不是位运算符？",
        options: ["&", "|", "^", "%"],
        answer: 3,
        explanation: "%是求余运算符，不是位运算符"
    },
    {
        question: "关于运算符的结合性，以下说法正确的是？",
        options: ["都是左结合", "都是右结合", "由优先级决定", "有的左有的右"],
        answer: 3,
        explanation: "不同运算符可能有不同的结合性，如赋值运算符是右结合的"
    },
    {
        question: "前缀自增(++i)和后缀自增(i++)的主要区别是？",
        options: ["运算速度", "返回值类型", "使用场景", "没有区别"],
        answer: 1,
        explanation: "前缀返回增加后的值，后缀返回增加前的值"
    },
    {
        question: "以下哪个表达式可能导致未定义行为？",
        options: ["a + b", "a++ + ++a", "a *= b", "a ? b : c"],
        answer: 1,
        explanation: "在同一表达式中多次修改同一变量会导致未定义行为"
    },
    {
        question: "关于逗号运算符，以下说法正确的是？",
        options: ["返回第一个表达式的值", "返回最后一个表达式的值", "返回所有值", "没有返回值"],
        answer: 1,
        explanation: "逗号运算符返回最后一个表达式的值"
    },
    {
        question: "以下哪个运算符优先级最低？",
        options: [",", "=", "+", "*"],
        answer: 0,
        explanation: "逗号运算符的优先级最低"
    },
    {
        question: "关于类型转换运算符，以下说法错误的是？",
        options: ["可以显式调用", "可以隐式转换", "总是安全的", "可能丢失精度"],
        answer: 2,
        explanation: "类型转换不一定安全，可能导致数据丢失或精度降低"
    },
    {
        question: "以下哪个不是C++11新增的运算符？",
        options: ["->*", "<=>", "&&", "||"],
        answer: 0,
        explanation: "->*是成员指针运算符，不是C++11新增的"
    },
    {
        question: "关于运算符重载，以下说法正确的是？",
        options: ["所有运算符都能重载", "只能重载已有运算符", "能创建新运算符", "不能改变优先级"],
        answer: 3,
        explanation: "运算符重载不能改变运算符的优先级和结合性"
    },
    {
        question: "以下哪种情况不会发生隐式类型转换？",
        options: ["int到float", "float到int", "const到非const", "派生类到基类"],
        answer: 2,
        explanation: "const对象不能隐式转换为非const对象"
    },
    {
        question: "关于算术运算的溢出，以下说法正确的是？",
        options: ["总是报错", "自动处理", "未定义行为", "编译错误"],
        answer: 2,
        explanation: "整数算术运算的溢出是未定义行为"
    },
    {
        question: "以下哪个运算符不能用于浮点数？",
        options: ["+", "-", "*", "%"],
        answer: 3,
        explanation: "求余运算符%不能用于浮点数"
    },
    {
        question: "关于位运算的性能，以下说法正确的是？",
        options: ["总是最快的", "取决于硬件", "比算术运算慢", "与编译器无关"],
        answer: 1,
        explanation: "位运算的性能取决于硬件实现"
    },
    {
        question: "以下哪个运算符的优先级最高？",
        options: ["!", "++", "->", "."],
        answer: 3,
        explanation: "成员访问运算符.的优先级最高"
    },
    {
        question: "关于运算符的副作用，以下说法错误的是？",
        options: ["可能改变操作数", "影响程序状态", "总是可预测的", "需要注意顺序"],
        answer: 2,
        explanation: "运算符的副作用不一定可预测，特别是在复杂表达式中"
    },

    // 代码题（20道）
    {
        question: "以下代码的输出是什么？\nint a = 5, b = 2;\ncout << a/b << \" \" << a%b;",
        options: ["2.5 0", "2 1", "2 0", "3 1"],
        answer: 1,
        explanation: "整数除法得到2，求余得到1"
    },
    {
        question: "这段代码会输出什么？\nint x = 10;\ncout << x++ + ++x;",
        options: ["21", "22", "20", "未定义行为"],
        answer: 3,
        explanation: "在同一表达式中多次修改同一变量是未定义行为"
    },
    {
        question: "下面的代码输出什么？\nint a = 5;\ncout << (a += 2) << \" \" << a;",
        options: ["5 7", "7 5", "7 7", "5 5"],
        answer: 2,
        explanation: "复合赋值运算符返回修改后的值"
    },
    {
        question: "这段代码的结果是？\nint x = -5;\nunsigned int y = 10;\ncout << x + y;",
        options: ["5", "15", "很大的数", "-5"],
        answer: 2,
        explanation: "signed和unsigned混合运算会将signed转换为unsigned"
    },
    {
        question: "以下代码会输出什么？\nint a = 1, b = 2, c = 3;\ncout << (a, b, c);",
        options: ["1", "2", "3", "6"],
        answer: 2,
        explanation: "逗号运算符返回最后一个表达式的值"
    },
    {
        question: "这段代码输出什么？\nint x = 5;\ncout << (x > 3 ? x < 7 ? 1 : 2 : 3);",
        options: ["1", "2", "3", "5"],
        answer: 0,
        explanation: "嵌套的条件运算符，x>3且x<7，返回1"
    },
    {
        question: "下面的代码输出什么？\nint i = 1;\nwhile(i++ < 5) cout << i;",
        options: ["1234", "2345", "12345", "2346"],
        answer: 1,
        explanation: "先比较后增加，输出增加后的值"
    },
    {
        question: "这段代码的输出结果是？\nint x = 10;\ncout << (x += x -= x *= 2);",
        options: ["0", "10", "20", "30"],
        answer: 0,
        explanation: "从右到左计算：x*=2得20，x-=20得0，x+=0得0"
    },
    {
        question: "以下代码会输出什么？\nint a = 5;\ncout << (a++ + ++a);",
        options: ["11", "12", "13", "未定义行为"],
        answer: 3,
        explanation: "在同一表达式中多次修改变量a是未定义行为"
    },
    {
        question: "这段代码输出什么？\nint x = 7;\ncout << (x & 1) << (x | 1) << (x ^ 1);",
        options: ["171", "176", "177", "167"],
        answer: 0,
        explanation: "按位与得1，按位或得7，按位异或得6"
    },
    {
        question: "下面的代码会输出什么？\nint a = 10, b = 4;\ncout << a/b*b;",
        options: ["8", "10", "12", "9"],
        answer: 0,
        explanation: "先整除得2，然后乘4得8"
    },
    {
        question: "这段代码的结果是？\nint x = -3;\ncout << +x << \" \" << -x;",
        options: ["-3 3", "3 -3", "-3 -3", "3 3"],
        answer: 0,
        explanation: "一元加号不改变值，一元减号改变符号"
    },
    {
        question: "以下代码会输出什么？\nint i = 5;\ncout << (i >> 1) << (i << 1);",
        options: ["210", "28", "102", "510"],
        answer: 1,
        explanation: "右移1位得2，左移1位得10"
    },
    {
        question: "这段代码输出什么？\nint x = 1, y = 2;\ncout << (x && y) << (x || y);",
        options: ["01", "11", "10", "00"],
        answer: 1,
        explanation: "逻辑与为true(1)，逻辑或为true(1)"
    },
    {
        question: "下面的代码输出什么？\nint a = 3, b = 4;\ncout << (a & b) << (a | b);",
        options: ["07", "34", "07", "43"],
        answer: 0,
        explanation: "按位与得0，按位或得7"
    },
    {
        question: "这段代码的输出结果是？\nint x = 5;\ncout << (x = x + 3) << x;",
        options: ["55", "88", "58", "85"],
        answer: 2,
        explanation: "先加3赋值得8，然后输出8和8"
    },
    {
        question: "以下代码会输出什么？\nint a = 10;\ncout << (a > 5 ? a < 15 ? 1 : 2 : 3);",
        options: ["1", "2", "3", "10"],
        answer: 0,
        explanation: "嵌套条件运算符，a>5且a<15，返回1"
    },
    {
        question: "这段代码输出什么？\nint x = 1, y = 2, z = 3;\ncout << (x, y, z) << (z, y, x);",
        options: ["31", "33", "11", "13"],
        answer: 0,
        explanation: "两个逗号表达式分别返回最后一个值"
    },
    {
        question: "下面的代码会输出什么？\nint i = 1;\ncout << -i++ << \" \" << i;",
        options: ["-1 1", "-1 2", "1 2", "1 1"],
        answer: 1,
        explanation: "先取负再输出，然后增加i的值"
    },
    {
        question: "这段代码的结果是？\nint x = 10;\ncout << (x += 3) << (x *= 2);",
        options: ["1326", "1323", "1313", "2626"],
        answer: 2,
        explanation: "先加3得13，输出13，再乘2得26，输出26"
    }
]; 