window.mathQuestions = [
    // 理论题（30道）
    {
        question: "在C++中，使用数学函数需要包含哪个头文件？",
        options: ["<math.h>", "<cmath>", "两者都可以", "<mathematics>"],
        answer: 2,
        explanation: "C++中可以使用C风格的<math.h>或C++风格的<cmath>头文件，两者都可以"
    },
    {
        question: "以下哪个函数用于计算平方根？",
        options: ["pow()", "sqrt()", "root()", "square()"],
        answer: 1,
        explanation: "sqrt()函数用于计算一个数的平方根"
    },
    {
        question: "pow(2, 3)的返回值类型是什么？",
        options: ["int", "long", "float", "double"],
        answer: 3,
        explanation: "pow()函数返回double类型，即使参数是整数"
    },
    {
        question: "ceil(3.2)的结果是多少？",
        options: ["3", "3.2", "4", "3.0"],
        answer: 2,
        explanation: "ceil()函数返回大于或等于参数的最小整数，3.2向上取整为4"
    },
    {
        question: "floor(-3.8)的结果是多少？",
        options: ["-3", "-4", "3", "-3.0"],
        answer: 1,
        explanation: "floor()函数返回小于或等于参数的最大整数，-3.8向下取整为-4"
    },
    {
        question: "round(3.5)的结果是多少？",
        options: ["3", "4", "3.5", "3.0"],
        answer: 1,
        explanation: "round()函数返回四舍五入后的整数，3.5四舍五入为4"
    },
    {
        question: "abs()函数不能用于以下哪种类型？",
        options: ["int", "float", "double", "string"],
        answer: 3,
        explanation: "abs()函数只能用于数值类型，不能用于字符串类型"
    },
    {
        question: "log()函数默认使用什么底数？",
        options: ["2", "e", "10", "无默认值"],
        answer: 1,
        explanation: "log()函数默认使用自然对数的底数e"
    },
    {
        question: "以下哪个函数用于计算正弦值？",
        options: ["sin()", "sine()", "sinus()", "sinx()"],
        answer: 0,
        explanation: "sin()函数用于计算角度的正弦值，参数为弧度"
    },
    {
        question: "三角函数的参数单位是什么？",
        options: ["角度", "弧度", "都可以", "取决于编译器"],
        answer: 1,
        explanation: "C++中三角函数的参数必须是弧度制"
    },
    {
        question: "acos()函数的值域是多少？",
        options: ["[-1, 1]", "[0, π]", "[-π, π]", "[0, 2π]"],
        answer: 1,
        explanation: "acos()函数返回[0, π]区间内的反余弦值"
    },
    {
        question: "以下哪个不是C++的数学常量？",
        options: ["M_PI", "M_E", "M_LOG2E", "M_TAU"],
        answer: 3,
        explanation: "M_TAU不是标准C++的数学常量，其他都是在某些实现中定义的常量"
    },
    {
        question: "fmod()函数的作用是什么？",
        options: ["取整", "取模", "取余", "四舍五入"],
        answer: 2,
        explanation: "fmod()函数用于计算浮点数的取余运算"
    },
    {
        question: "hypot(3, 4)的结果是多少？",
        options: ["5", "7", "12", "25"],
        answer: 0,
        explanation: "hypot()函数计算直角三角形的斜边长度，3-4-5三角形的斜边为5"
    },
    {
        question: "log10()函数的作用是什么？",
        options: ["计算以e为底的对数", "计算以2为底的对数", "计算以10为底的对数", "计算自然对数"],
        answer: 2,
        explanation: "log10()函数用于计算以10为底的对数"
    },
    {
        question: "exp(1)的结果是多少？",
        options: ["1", "e", "2.718", "10"],
        answer: 1,
        explanation: "exp(1)返回e的1次方，即自然常数e"
    },
    {
        question: "以下哪个函数用于将角度转换为弧度？",
        options: ["rad()", "toRadian()", "不需要函数", "degree()"],
        answer: 2,
        explanation: "C++没有内置的角度转弧度函数，需要自己计算：角度 * π / 180"
    },
    {
        question: "sinh()函数的作用是什么？",
        options: ["正弦函数", "反正弦函数", "双曲正弦函数", "正弦的平方"],
        answer: 2,
        explanation: "sinh()函数计算双曲正弦值"
    },
    {
        question: "ldexp(x, n)的功能是什么？",
        options: ["x的n次方", "x乘以2的n次方", "x的对数", "x的平方根"],
        answer: 1,
        explanation: "ldexp(x, n)计算x * 2^n"
    },
    {
        question: "frexp()函数的作用是什么？",
        options: ["分解浮点数", "计算小数部分", "取整", "四舍五入"],
        answer: 0,
        explanation: "frexp()函数将浮点数分解为尾数和指数"
    },
    {
        question: "modf()函数的返回值是什么？",
        options: ["整数部分", "小数部分", "两者都是", "取决于参数"],
        answer: 1,
        explanation: "modf()函数返回小数部分，并通过参数返回整数部分"
    },
    {
        question: "copysign(x, y)的作用是什么？",
        options: ["比较大小", "复制数值", "返回带y符号的x", "返回x和y的乘积"],
        answer: 2,
        explanation: "copysign()返回带有y符号的x的绝对值"
    },
    {
        question: "以下哪个函数用于判断一个数是否为有限值？",
        options: ["isfinite()", "finite()", "isnormal()", "isfin()"],
        answer: 0,
        explanation: "isfinite()函数用于判断一个浮点数是否为有限值"
    },
    {
        question: "nextafter()函数的作用是什么？",
        options: ["向上取整", "向下取整", "找下一个数", "找前一个数"],
        answer: 2,
        explanation: "nextafter()返回参数方向上的下一个可表示的浮点数"
    },
    {
        question: "tgamma()函数计算什么？",
        options: ["正切值", "伽马函数", "双曲正切", "对数"],
        answer: 1,
        explanation: "tgamma()函数计算伽马函数值"
    },
    {
        question: "remainder()和fmod()的主要区别是什么？",
        options: ["没有区别", "返回值类型不同", "舍入方式不同", "参数类型不同"],
        answer: 2,
        explanation: "remainder()使用舍入到最接近值的方式，而fmod()截断除法"
    },
    {
        question: "fdim(x, y)的功能是什么？",
        options: ["x和y的差", "x和y的最大值", "正数差", "x和y的距离"],
        answer: 2,
        explanation: "fdim()返回x和y的正数差，如果x>y返回x-y，否则返回0"
    },
    {
        question: "fma(x, y, z)的作用是什么？",
        options: ["x+y+z", "x*y+z", "(x+y)*z", "x*y*z"],
        answer: 1,
        explanation: "fma()函数执行融合乘加运算，计算x*y+z"
    },
    {
        question: "remquo()函数返回什么？",
        options: ["商", "余数", "两者都是", "取决于参数"],
        answer: 2,
        explanation: "remquo()函数同时返回除法的商和余数"
    },
    {
        question: "nan()函数的作用是什么？",
        options: ["判断是否为NaN", "返回NaN", "转换为数字", "检查错误"],
        answer: 1,
        explanation: "nan()函数返回一个NaN（非数字）值"
    },

    // 代码题（20道）
    {
        question: "以下代码输出什么？\n#include <cmath>\nint main() {\n    cout << pow(2, 3) + sqrt(16);\n    return 0;\n}",
        options: ["12", "12.0", "8", "10"],
        answer: 0,
        explanation: "2的3次方是8，16的平方根是4，8+4=12"
    },
    {
        question: "这段代码的结果是？\ndouble x = -3.7;\ncout << ceil(x) << \" \" << floor(x);",
        options: ["-3 -4", "-4 -3", "-3 -3", "-4 -4"],
        answer: 0,
        explanation: "-3.7向上取整为-3，向下取整为-4"
    },
    {
        question: "下面的代码输出什么？\ncout << round(3.4) << \" \" << round(3.6);",
        options: ["3 3", "3 4", "3.0 4.0", "4 4"],
        answer: 1,
        explanation: "3.4四舍五入为3，3.6四舍五入为4"
    },
    {
        question: "这段代码会输出什么？\ncout << abs(-5.5) << \" \" << fabs(-5.5);",
        options: ["5 5", "5.5 5.5", "5 5.5", "5.5 5"],
        answer: 1,
        explanation: "abs和fabs都返回绝对值，5.5"
    },
    {
        question: "以下代码的输出是什么？\ncout << sin(M_PI/2) << \" \" << cos(M_PI);",
        options: ["1 -1", "0 1", "1 1", "0 -1"],
        answer: 0,
        explanation: "sin(π/2)=1，cos(π)=-1"
    },
    {
        question: "这段代码输出什么？\ncout << log(exp(1.0));",
        options: ["0", "1", "2.718", "e"],
        answer: 1,
        explanation: "exp(1)得到e，log(e)得到1"
    },
    {
        question: "下面的代码结果是？\ncout << hypot(3, 4) << \" \" << sqrt(pow(3,2) + pow(4,2));",
        options: ["5 5", "7 7", "5 7", "7 5"],
        answer: 0,
        explanation: "两种方式都是计算3-4-5三角形的斜边，结果都是5"
    },
    {
        question: "这段代码输出什么？\ndouble x = 1.23;\ndouble intPart;\ncout << modf(x, &intPart) << \" \" << intPart;",
        options: ["0.23 1", "1 0.23", "1.23 0", "0 1.23"],
        answer: 0,
        explanation: "modf返回小数部分0.23，整数部分1存储在intPart中"
    },
    {
        question: "以下代码会输出什么？\ncout << fmod(5.7, 2.3);",
        options: ["1.1", "2.3", "1.0", "2.0"],
        answer: 0,
        explanation: "5.7除以2.3的余数是1.1"
    },
    {
        question: "这段代码的结果是？\ncout << log2(8) << \" \" << log10(100);",
        options: ["3 2", "2 3", "8 100", "4 10"],
        answer: 0,
        explanation: "log2(8)=3因为2^3=8，log10(100)=2因为10^2=100"
    },
    {
        question: "下面的代码输出什么？\ncout << remainder(10.3, 3.0) << \" \" << fmod(10.3, 3.0);",
        options: ["1.3 1.3", "1.3 1.0", "1.0 1.3", "1.0 1.0"],
        answer: 1,
        explanation: "remainder和fmod使用不同的舍入方式计算余数"
    },
    {
        question: "这段代码会输出什么？\ncout << copysign(3.14, -2.0);",
        options: ["3.14", "-3.14", "2.0", "-2.0"],
        answer: 1,
        explanation: "返回带有-2.0符号的3.14的绝对值，即-3.14"
    },
    {
        question: "以下代码的输出是什么？\ncout << fdim(5.0, 3.0) << \" \" << fdim(3.0, 5.0);",
        options: ["2 0", "2 -2", "2 2", "0 2"],
        answer: 0,
        explanation: "fdim(5,3)返回2，fdim(3,5)返回0"
    },
    {
        question: "这段代码输出什么？\ncout << fma(2.0, 3.0, 4.0);",
        options: ["10.0", "12.0", "14.0", "24.0"],
        answer: 1,
        explanation: "fma计算2*3+4=10"
    },
    {
        question: "下面的代码结果是？\ncout << isfinite(0.0/0.0);",
        options: ["1", "0", "true", "false"],
        answer: 1,
        explanation: "0.0/0.0是NaN，不是有限值，返回0"
    },
    {
        question: "这段代码输出什么？\ncout << round(3.5) << \" \" << round(-3.5);",
        options: ["4 -4", "3 -3", "4 -3", "3 -4"],
        answer: 0,
        explanation: "3.5四舍五入为4，-3.5四舍五入为-4"
    },
    {
        question: "以下代码会输出什么？\ncout << ceil(3.0) << \" \" << ceil(3.1);",
        options: ["3 3", "3 4", "4 4", "3 3.1"],
        answer: 1,
        explanation: "3.0向上取整为3，3.1向上取整为4"
    },
    {
        question: "这段代码的结果是？\ncout << floor(3.9) << \" \" << floor(-3.1);",
        options: ["3 -3", "3 -4", "4 -3", "3 -3.1"],
        answer: 1,
        explanation: "3.9向下取整为3，-3.1向下取整为-4"
    },
    {
        question: "下面的代码输出什么？\ncout << pow(2.0, -2.0);",
        options: ["0.25", "-4", "4", "0.5"],
        answer: 0,
        explanation: "2的-2次方等于1/4=0.25"
    },
    {
        question: "这段代码会输出什么？\ncout << sqrt(pow(3,2) + pow(4,2)) << \" \" << hypot(3,4);",
        options: ["5 5", "7 7", "25 25", "5 7"],
        answer: 0,
        explanation: "两种方式都是计算3-4-5三角形的斜边，结果都是5"
    }
]; 