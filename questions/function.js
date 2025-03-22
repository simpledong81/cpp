window.functionQuestions = [
    // 理论题（30道）
    {
        question: "C++函数的返回值类型void表示什么？",
        options: ["返回整数", "返回空指针", "无返回值", "返回字符串"],
        answer: 2,
        explanation: "void表示函数没有返回值，通常用于不需要返回结果的函数"
    },
    {
        question: "关于函数重载，以下说法错误的是？",
        options: ["可以有不同参数类型", "可以有不同参数个数", "可以有不同返回类型", "必须在同一作用域"],
        answer: 2,
        explanation: "函数重载必须有不同的参数列表，仅返回类型不同不构成重载"
    },
    {
        question: "以下哪个不是函数参数的传递方式？",
        options: ["值传递", "引用传递", "指针传递", "直接传递"],
        answer: 3,
        explanation: "C++中函数参数的传递方式主要有值传递、引用传递和指针传递"
    },
    {
        question: "关于内联函数，以下说法正确的是？",
        options: ["使用inline修饰", "一定会被内联", "可以递归", "必须在头文件中定义"],
        answer: 0,
        explanation: "内联函数使用inline关键字修饰，但编译器不保证一定会内联"
    },
    {
        question: "递归函数必须具备的条件是？",
        options: ["有循环", "有终止条件", "有返回值", "有多个参数"],
        answer: 1,
        explanation: "递归函数必须有终止条件（基准情况），否则会导致无限递归"
    },
    {
        question: "函数默认参数的规则是什么？",
        options: ["必须都有默认值", "从左到右默认", "从右到左默认", "没有顺序要求"],
        answer: 2,
        explanation: "默认参数必须从右到左连续定义，不能跳过"
    },
    {
        question: "关于函数原型，以下说法错误的是？",
        options: ["声明函数接口", "必须指定参数名", "可以多次声明", "在调用前声明"],
        answer: 1,
        explanation: "函数原型中的参数名是可选的，只需要指定参数类型"
    },
    {
        question: "以下哪个不是递归的应用场景？",
        options: ["二分查找", "快速排序", "斐波那契数列", "位运算"],
        answer: 3,
        explanation: "位运算通常使用循环或直接计算，很少使用递归实现"
    },
    {
        question: "函数指针的主要用途是什么？",
        options: ["存储函数地址", "动态调用函数", "两者都是", "提高性能"],
        answer: 2,
        explanation: "函数指针可以存储函数地址并实现动态调用，常用于回调函数"
    },
    {
        question: "关于递归和迭代，以下说法正确的是？",
        options: ["递归总是更快", "迭代总是更快", "取决于具体问题", "完全等价"],
        answer: 2,
        explanation: "递归和迭代的效率取决于具体问题，有些问题递归更自然，有些问题迭代更高效"
    },
    {
        question: "以下哪个不是函数参数的特性？",
        options: ["可以有默认值", "可以是数组", "可以是函数", "必须是常量"],
        answer: 3,
        explanation: "函数参数可以是变量、数组、函数等，不必是常量"
    },
    {
        question: "尾递归的特点是什么？",
        options: ["没有递归", "递归调用在最后", "多次递归调用", "必须有返回值"],
        answer: 1,
        explanation: "尾递归是指递归调用是函数的最后一个操作，可以被编译器优化"
    },
    {
        question: "关于函数重载的解析，以下说法错误的是？",
        options: ["根据参数类型", "根据参数个数", "根据函数名", "根据返回值"],
        answer: 3,
        explanation: "函数重载的解析只根据参数列表，与返回值类型无关"
    },
    {
        question: "以下哪个不是递归的缺点？",
        options: ["空间开销大", "可能栈溢出", "代码简洁", "效率低"],
        answer: 2,
        explanation: "递归的优点是代码简洁易懂，缺点是空间开销大且可能栈溢出"
    },
    {
        question: "函数调用时参数的传递顺序是？",
        options: ["从左到右", "从右到左", "随机顺序", "由编译器决定"],
        answer: 1,
        explanation: "C++标准规定函数参数的求值顺序是未指定的，但大多数编译器采用从右到左的顺序"
    },
    {
        question: "关于constexpr函数，以下说法正确的是？",
        options: ["运行时计算", "编译时计算", "不能有返回值", "不能有参数"],
        answer: 1,
        explanation: "constexpr函数在编译时求值，用于常量表达式"
    },
    {
        question: "以下哪个不是函数返回值的方式？",
        options: ["return语句", "引用返回", "指针返回", "自动返回"],
        answer: 3,
        explanation: "C++函数通过return语句返回值，可以返回值、引用或指针"
    },
    {
        question: "递归函数的空间复杂度主要取决于？",
        options: ["循环次数", "递归深度", "返回值大小", "参数个数"],
        answer: 1,
        explanation: "递归函数的空间复杂度主要取决于递归调用的深度，每次递归都会压栈"
    },
    {
        question: "关于函数模板，以下说法错误的是？",
        options: ["支持类型参数", "支持非类型参数", "必须显式实例化", "自动类型推导"],
        answer: 2,
        explanation: "函数模板可以自动实例化，不必显式指定模板参数"
    },
    {
        question: "以下哪个不是函数重载的依据？",
        options: ["参数类型", "参数个数", "参数顺序", "参数名称"],
        answer: 3,
        explanation: "函数重载根据参数的类型、个数和顺序，参数名称不影响重载"
    },
    {
        question: "关于main函数，以下说法错误的是？",
        options: ["程序入口", "可以重载", "可以递归", "可以省略返回值"],
        answer: 1,
        explanation: "main函数是程序的入口点，不能重载，但可以省略返回值（默认返回0）"
    },
    {
        question: "递归算法的设计步骤不包括？",
        options: ["确定基准情况", "确定递归关系", "确定返回值", "确定循环次数"],
        answer: 3,
        explanation: "递归算法的设计主要包括确定基准情况、递归关系和返回值"
    },
    {
        question: "以下哪个不是函数调用的开销？",
        options: ["参数压栈", "保存现场", "分配栈空间", "修改返回值"],
        answer: 3,
        explanation: "函数调用的开销包括参数压栈、保存现场和分配栈空间"
    },
    {
        question: "关于lambda函数，以下说法错误的是？",
        options: ["可以捕获变量", "可以指定返回类型", "必须有参数", "可以使用auto"],
        answer: 2,
        explanation: "lambda函数的参数列表可以为空，不是必须的"
    },
    {
        question: "以下哪个不是函数参数的默认值特性？",
        options: ["在声明中指定", "在定义中指定", "可以是表达式", "可以重复指定"],
        answer: 3,
        explanation: "函数参数的默认值只能在声明或定义中指定一次"
    },
    {
        question: "关于递归和迭代的转换，以下说法正确的是？",
        options: ["总是可以转换", "永远不能转换", "部分可以转换", "取决于编译器"],
        answer: 0,
        explanation: "任何递归算法都可以转换为迭代算法，但可能会增加代码复杂度"
    },
    {
        question: "函数重载的目的是什么？",
        options: ["提高性能", "增加可读性", "简化代码", "以上都是"],
        answer: 3,
        explanation: "函数重载可以提高代码的可读性、简化代码结构并在某些情况下提高性能"
    },
    {
        question: "以下哪个不是递归函数的特点？",
        options: ["自己调用自己", "有终止条件", "问题规模减小", "必须有循环"],
        answer: 3,
        explanation: "递归函数的特点是自己调用自己、有终止条件、问题规模逐渐减小"
    },
    {
        question: "关于函数的返回值优化，以下说法错误的是？",
        options: ["编译器优化", "减少拷贝", "自动执行", "降低性能"],
        answer: 3,
        explanation: "返回值优化是编译器的一种优化技术，可以减少不必要的拷贝，提高性能"
    },
    {
        question: "以下哪个不是函数声明的必要部分？",
        options: ["返回类型", "函数名", "参数列表", "参数名"],
        answer: 3,
        explanation: "函数声明必须包含返回类型、函数名和参数列表，参数名是可选的"
    },

    // 代码题（20道）
    {
        question: "以下递归函数的输出是什么？\nvoid fun(int n) {\n    if (n > 0) {\n        cout << n << \" \";\n        fun(n - 1);\n    }\n}\nfun(3);",
        options: ["1 2 3", "3 2 1", "3 2 1 0", "3 2 1 "],
        answer: 3,
        explanation: "函数从3开始递归，每次减1，直到n不大于0，输出\"3 2 1 \""
    },
    {
        question: "这段代码的输出是什么？\nint sum(int n) {\n    if (n == 1) return 1;\n    return n + sum(n-1);\n}\ncout << sum(4);",
        options: ["4", "10", "6", "24"],
        answer: 1,
        explanation: "递归计算1到n的和，sum(4) = 4 + 3 + 2 + 1 = 10"
    },
    {
        question: "下面的函数输出什么？\nvoid print(int x = 1, int y = 2) {\n    cout << x << y;\n}\nprint(5);",
        options: ["12", "52", "51", "21"],
        answer: 1,
        explanation: "第一个参数使用传入的5，第二个参数使用默认值2"
    },
    {
        question: "这段代码的结果是？\nint fib(int n) {\n    if (n <= 1) return n;\n    return fib(n-1) + fib(n-2);\n}\ncout << fib(4);",
        options: ["3", "4", "5", "8"],
        answer: 0,
        explanation: "斐波那契数列第4项是3（0,1,1,2,3）"
    },
    {
        question: "以下代码输出什么？\nint max(int a, int b) { return a > b ? a : b; }\nint max(int a, int b, int c) { return max(max(a,b), c); }\ncout << max(1,2,3);",
        options: ["1", "2", "3", "6"],
        answer: 2,
        explanation: "函数重载，三参数版本通过调用两参数版本找出最大值3"
    },
    {
        question: "这段代码会输出什么？\nvoid swap(int& a, int& b) {\n    int t = a; a = b; b = t;\n}\nint x = 1, y = 2;\nswap(x, y);\ncout << x << y;",
        options: ["12", "21", "11", "22"],
        answer: 1,
        explanation: "通过引用交换两个数的值，x变成2，y变成1"
    },
    {
        question: "下面的代码输出什么？\nint fact(int n) {\n    return n <= 1 ? 1 : n * fact(n-1);\n}\ncout << fact(3);",
        options: ["3", "6", "9", "27"],
        answer: 1,
        explanation: "递归计算阶乘，3! = 3 * 2 * 1 = 6"
    },
    {
        question: "这段代码的结果是？\nint count(int n) {\n    if (n == 0) return 0;\n    return 1 + count(n/10);\n}\ncout << count(123);",
        options: ["3", "6", "123", "321"],
        answer: 0,
        explanation: "递归计算整数的位数，123有3位"
    },
    {
        question: "以下代码输出什么？\nvoid fun(int x) { cout << x; }\nvoid fun(double x) { cout << x+1; }\nfun(5.0);",
        options: ["5", "5.0", "6", "6.0"],
        answer: 2,
        explanation: "调用double版本的重载函数，输出5+1=6"
    },
    {
        question: "这段代码会输出什么？\nint power(int x, int n) {\n    if (n == 0) return 1;\n    return x * power(x, n-1);\n}\ncout << power(2, 3);",
        options: ["6", "8", "9", "16"],
        answer: 1,
        explanation: "递归计算x的n次方，2^3 = 2 * 2 * 2 = 8"
    },
    {
        question: "下面的代码结果是？\nint gcd(int a, int b) {\n    return b == 0 ? a : gcd(b, a%b);\n}\ncout << gcd(12, 18);",
        options: ["2", "3", "6", "9"],
        answer: 2,
        explanation: "使用欧几里得算法递归计算最大公约数，12和18的最大公约数是6"
    },
    {
        question: "这段代码输出什么？\nvoid print(const string& s) {\n    if (!s.empty()) {\n        cout << s[0];\n        print(s.substr(1));\n    }\n}\nprint(\"ABC\");",
        options: ["ABC", "CBA", "A", "C"],
        answer: 0,
        explanation: "递归打印字符串的每个字符，从左到右输出\"ABC\""
    },
    {
        question: "以下代码的输出是什么？\nint f(int& x, int y) {\n    x += y;\n    return x;\n}\nint a = 1, b = 2;\ncout << f(a,b) << a;",
        options: ["12", "21", "31", "33"],
        answer: 2,
        explanation: "x是引用参数，改变了a的值，输出f(a,b)=3和a=3"
    },
    {
        question: "这段代码会输出什么？\nint sum(int arr[], int n) {\n    if (n <= 0) return 0;\n    return arr[n-1] + sum(arr, n-1);\n}\nint a[] = {1,2,3};\ncout << sum(a,3);",
        options: ["3", "6", "9", "12"],
        answer: 1,
        explanation: "递归计算数组元素之和，1+2+3=6"
    },
    {
        question: "下面的代码输出什么？\ntemplate<typename T>\nT max(T a, T b) { return a > b ? a : b; }\ncout << max(3.14, 2.72);",
        options: ["2.72", "3.14", "3", "2"],
        answer: 1,
        explanation: "函数模板自动推导类型为double，返回较大值3.14"
    },
    {
        question: "这段代码的结果是？\nint binary(int n) {\n    if (n == 0) return 0;\n    return n % 2 + 10 * binary(n / 2);\n}\ncout << binary(5);",
        options: ["101", "110", "111", "100"],
        answer: 0,
        explanation: "递归将十进制数转换为二进制数，5的二进制是101"
    },
    {
        question: "以下代码输出什么？\nvoid reverse(int n) {\n    if (n < 10) cout << n;\n    else {\n        cout << n % 10;\n        reverse(n / 10);\n    }\n}\nreverse(123);",
        options: ["123", "321", "132", "213"],
        answer: 1,
        explanation: "递归反转数字，输出每个数位，结果是321"
    },
    {
        question: "这段代码会输出什么？\nauto add = [](int a, int b) { return a + b; };\ncout << add(3, 4);",
        options: ["7", "12", "34", "43"],
        answer: 0,
        explanation: "lambda函数实现两数相加，3+4=7"
    },
    {
        question: "下面的代码结果是？\nint f(int n) {\n    if (n <= 1) return n;\n    return f(n-1) + f(n-2);\n}\ncout << f(5);",
        options: ["5", "8", "13", "21"],
        answer: 0,
        explanation: "递归计算斐波那契数列第5项，结果是5（0,1,1,2,3,5）"
    },
    {
        question: "这段代码输出什么？\nvoid hanoi(int n, char src, char aux, char dst) {\n    if (n == 1) cout << src << dst;\n    else {\n        hanoi(n-1, src, dst, aux);\n        cout << src << dst;\n        hanoi(n-1, aux, src, dst);\n    }\n}\nhanoi(2, 'A', 'B', 'C');",
        options: ["ABCABC", "ACBACB", "ABACBC", "ACBABC"],
        answer: 2,
        explanation: "汉诺塔递归算法，2个盘子的移动序列是ABACBC"
    }
]; 