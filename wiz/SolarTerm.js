var SolarTerm = function () {

};

SolarTerm.corrections = Ephem.unzip('FrcFs11AFsckF1tsDtFqEtF3posFdFgiFseFtmelpsEfhkF1anmelpFlF3ikrotcnEqEq1FfqmcDsrFor11FgFrcgDscFs11FgEeFtE1sfFs11sCoEsaF1tsD3FpeE1eFsssEciFsFnmelpFcFhkF1tcnEqEpFgkrotcnEqrEtFermcDsrE111FgBmcmr11DaEfnaF111sD3FpeForeF1tssEfiFpEoeFssD3iFstEqFppDgFstcnEqEpFg33FscnEqrAoAF1ClAEsDmDtCtBaDlAFbAEpAAAAAD1FgBiBqoBbnBaBoAAAAAAAEgDqAdBqAFrBaBoACdAAf3AACgAAAeBbCamDgEifAE1AABa3C3BgFdiAAACoCeE3ADiEifDaAEqAAFe3AcFbcAAAAAF3iFaAAACpACmFmAAAAAAAACrDaAAADG0');
SolarTerm.coefficients = [//气直线拟合参数
    1640650.479938, 15.21842500, // -221-11-09 h=0.01709 古历·秦汉
    1642476.703182, 15.21874996, // -216-11-09 h=0.01557 古历·秦汉
    1683430.515601, 15.218750011, // -104-12-25 h=0.01560 汉书·律历志(太初历)平气平朔 回归年=365.25000
    1752157.640664, 15.218749978, //   85-02-23 h=0.01559 后汉书·律历志(四分历) 回归年=365.25000
    1807675.003759, 15.218620279, //  237-02-22 h=0.00010 晋书·律历志(景初历) 回归年=365.24689
    1883627.765182, 15.218612292, //  445-02-03 h=0.00026 宋书·律历志(何承天元嘉历) 回归年=365.24670
    1907369.128100, 15.218449176, //  510-02-03 h=0.00027 宋书·律历志(祖冲之大明历) 回归年=365.24278
    1936603.140413, 15.218425000, //  590-02-17 h=0.00149 随书·律历志(开皇历) 回归年=365.24220
    1939145.524180, 15.218466998, //  597-02-03 h=0.00121 随书·律历志(大业历) 回归年=365.24321
    1947180.798300, 15.218524844, //  619-02-03 h=0.00052 新唐书·历志(戊寅元历)平气定朔 回归年=365.24460
    1964362.041824, 15.218533526, //  666-02-17 h=0.00059 新唐书·历志(麟德历) 回归年=365.24480
    1987372.340971, 15.218513908, //  729-02-16 h=0.00096 新唐书·历志(大衍历,至德历) 回归年=365.24433
    1999653.819126, 15.218530782, //  762-10-03 h=0.00093 新唐书·历志(五纪历) 回归年=365.24474
    2007445.469786, 15.218535181, //  784-02-01 h=0.00059 新唐书·历志(正元历,观象历) 回归年=365.24484
    2021324.917146, 15.218526248, //  822-02-01 h=0.00022 新唐书·历志(宣明历) 回归年=365.24463
    2047257.232342, 15.218519654, //  893-01-31 h=0.00015 新唐书·历志(崇玄历) 回归年=365.24447
    2070282.898213, 15.218425000, //  956-02-16 h=0.00149 旧五代·历志(钦天历) 回归年=365.24220
    2073204.872850, 15.218515221, //  964-02-16 h=0.00166 宋史·律历志(应天历) 回归年=365.24437
    2080144.500926, 15.218530782, //  983-02-16 h=0.00093 宋史·律历志(乾元历) 回归年=365.24474
    2086703.688963, 15.218523776, // 1001-01-31 h=0.00067 宋史·律历志(仪天历,崇天历) 回归年=365.24457
    2110033.182763, 15.218425000, // 1064-12-15 h=0.00669 宋史·律历志(明天历) 回归年=365.24220
    2111190.300888, 15.218425000, // 1068-02-15 h=0.00149 宋史·律历志(崇天历) 回归年=365.24220
    2113731.271005, 15.218515671, // 1075-01-30 h=0.00038 李锐补修(奉元历) 回归年=365.24438
    2120670.840263, 15.218425000, // 1094-01-30 h=0.00149 宋史·律历志 回归年=365.24220
    2123973.309063, 15.218425000, // 1103-02-14 h=0.00669 李锐补修(占天历) 回归年=365.24220
    2125068.997336, 15.218477932, // 1106-02-14 h=0.00056 宋史·律历志(纪元历) 回归年=365.24347
    2136026.312633, 15.218472436, // 1136-02-14 h=0.00088 宋史·律历志(统元历,乾道历,淳熙历) 回归年=365.24334
    2156099.495538, 15.218425000, // 1191-01-29 h=0.00149 宋史·律历志(会元历) 回归年=365.24220
    2159021.324663, 15.218425000, // 1199-01-29 h=0.00149 宋史·律历志(统天历) 回归年=365.24220
    2162308.575254, 15.218461742, // 1208-01-30 h=0.00146 宋史·律历志(开禧历) 回归年=365.24308
    2178485.706538, 15.218425000, // 1252-05-15 h=0.04606 淳祐历 回归年=365.24220
    2178759.662849, 15.218445786, // 1253-02-13 h=0.00231 会天历 回归年=365.24270
    2185334.020800, 15.218425000, // 1271-02-13 h=0.00520 宋史·律历志(成天历) 回归年=365.24220
    2187525.481425, 15.218425000, // 1277-02-12 h=0.00520 本天历 回归年=365.24220
    2188621.191481, 15.218437494, // 1280-02-13 h=0.00015 元史·历志(郭守敬授时历) 回归年=365.24250
    2322147.76// 1645-09-21
];
SolarTerm.terms = ['冬至', '小寒', '大寒', '立春', '雨水', '惊蛰', '春分', '清明', '谷雨', '立夏', '小满', '芒种', '夏至', '小暑', '大暑', '立秋', '处暑', '白露', '秋分', '寒露', '霜降', '立冬', '小雪', '大雪'];
SolarTerm.termCaches = {};

SolarTerm.prototype = {
    getNearWinterSolstice: function (jd) {
        var solstice = Math.floor((jd - 355 + 183) / 365.2422) * 365.2422 + 355; ////该年的气  //355是2000.12冬至,得到较靠近jd的冬至估计值
        this.getWinterSolstice(solstice) > jd && (solstice -= 365.2422);
        return solstice;
    },
    getWinterSolstice: function (jd) {
        jd += 2451545;
        var i, D, n;
        var B = SolarTerm.coefficients, pc = 7;
        var f1 = B[0] - pc, f2 = B[B.length - 1] - pc, f3 = 2436935;  // 2436935是1960.1.1

        if (jd < f1 || jd >= f3) { //平气表中首个之前，使用现代天文算法。1960.1.1以后，使用现代天文算法 (这一部分调用了qi_high和so_high,所以需星历表支持)
            D = Math.floor(Ephem.sun.term_high(Math.floor((jd + pc - 2451259) / 365.2422 * 24) * Math.PI / 12) + 0.5); //2451259是1999.3.21,太阳视黄经为0,春分.定气计算
        }

        if (jd >= f1 && jd < f2) { //平气
            for (i = 0; i < B.length; i += 2) {
                if (jd + pc < B[i + 2]) break
            }
            D = B[i] + B[i + 1] * Math.floor((jd + pc - B[i]) / B[i + 1]);
            D = Math.floor(D + 0.5);
            if (D == 1683460) D++; //如果使用太初历计算-103年1月24日的朔日,结果得到的是23日,这里修正为24日(实历)。修正后仍不影响-103的无中置闰。如果使用秦汉历，得到的是24日，本行D不会被执行。
            D = D - 2451545;
        }

        if (jd >= f2 && jd < f3) { //定气
            D = Math.floor(Ephem.sun.term_low(Math.floor((jd + pc - 2451259) / 365.2422 * 24) * Math.PI / 12) + 0.5); //2451259是1999.3.21,太阳视黄经为0,春分.定气计算
            n = SolarTerm.corrections.substr(Math.floor((jd - f2) / 365.2422 * 24), 1); //找定气修正值
            D = D + (n ? n - 2 : n);
        }

        return D;
    },

    getTerms: function (jd) {
        var winterDay = this.getNearWinterSolstice(jd), ar = [];
        if (SolarTerm.termCaches[winterDay]) {
            ar = SolarTerm.termCaches[winterDay];
        } else {
            ar.hash = {};
            for (var i = 0, o; i < 25; i++) {
                o = {
                    JD: this.getWinterSolstice(winterDay + 15.2184 * i),
                    name: SolarTerm.terms[i % 24]
                };
                ar.push(o);
                ar.hash[o.JD] = o;
            }
            SolarTerm.termCaches[winterDay] = ar;
        }
        return ar;
    }

};

