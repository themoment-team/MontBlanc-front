import React from "react";

class Logo extends React.Component {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="196"
        height="44"
        fill="none"
        viewBox="0 0 196 44"
      >
        <path fill="url(#pattern0)" d="M0 0H196V44H0z"></path>
        <defs>
          <pattern
            id="pattern0"
            width="1"
            height="1"
            patternContentUnits="objectBoundingBox"
          >
            <use
              transform="matrix(.00072 0 0 .00322 0 -.015)"
              xlinkHref="#image0"
            ></use>
          </pattern>
          <image
            id="image0"
            width="1384"
            height="320"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABWgAAAFACAYAAAAhw5UMAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAADU3SURBVHgB7d3fjlxFmi/siJVlNNPQmpp9A1198B1jzj+JBPeWZjAzFPsGuixMS3NkcwXYV9Bw1FJj5OIGGqMGZqQPm0T6zjHH+4DqK9geie7pwZUr9opVWcZ2+09V5cpcK1Y+j8TYzTQ0ZOWKFfGLN96I///3/zsFABiZ//eX/08MAAAAMHBVAAAAAACgFwJaAAAAAICeCGgBAAAAAHoioAUAAAAA6ImAFgAAAACgJwJaAAAAAICeCGgBAAAAAHoioAUAAAAA6ImAFgAAAACgJwJaAAAAAICeCGgBAAAAAHoioAUAAAAA6ImAFgAAAACgJwJaAAAAAICeCGgBAAAAAHoioAUAAAAA6ImAFgAAAACgJwJaAAAAAICeCGgBAAAAAHoioAUAAAAA6ImAFgAAAACgJwJaAAAAAICeCGgBAAAAAHoioAUAAAAA6ImAFgAAAACgJwJaAAAAAICeCGgBAAAAAHoioAUAAAAA6ImAFgAAAACgJwJaAAAAAICeCGgBAAAAAHoioAUAAAAA6ImAFgAAAACgJwJaAAAAAICeCGgBAAAAAHoioAUAAAAA6ImAFgAAAACgJwJaAAAAAICeCGgBAAAAAHoioAUAAAAA6ImAFgAAAACgJwJaAAAAAICeCGgBAAAAAHoioAUAAAAA6ImAFgAAAACgJwJaAAAAAICeCGgBAAAAAHoioAUAAAAA6ImAFgAAAACgJwJaAAAAAICeCGgBAAAAAHoioAUAAAAA6ImAFgAAAACgJwJaAAAAAICeCGgBAAAAAHoioAUAAAAA6ImAFgAAAACgJwJaAAAAAICeCGgBAAAAAHoioAUAAAAA6ImAFgAAAACgJwJaAAAAAICeCGgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADGKQYG6fU3Pt4Lhan/Ut2azS7dCwAAAADAiWwFBilW6WYozUuHB83/nQUAAAAA4ESqAAAAAABALwS0AAAAAAA9EdACAAAAAPREQAsAAAAA0BMBLQAAAABATwS0AAAAAAA9EdACAAAAAPREQAsAAAAA0BMBLQAAAABATwS0AAAAAAA9EdACAAAAAPREQAsAAAAA0BMBLQAAAABAT7bCEi68eSOFwsxDem32+buzAAAAAAAs7fU3Pt6LVboZShLjwe0/vvPLMAAqaAEAAAAAeiKgBQAAAADoiYAWAAAAAKAnAloAAAAAgJ4IaAEAAAAAeiKgBQAAAADoiYAWAAAAAKAnAloAAAAAgJ4IaAEAAAAAeiKgBQAAAADoiYAWAAAAAKAnAloAAAAAgJ4IaAEAAAAAeiKgBQAAAADoiYAWAAAAAKAnAloAAAAAgJ4IaAEAAAAAeiKgBQAAAADoiYAWAAAAAKAnAloAAAAAgJ4IaAEAAAAAerIVoBDT6c3tsP3X7XC4tTOZx+0U4/aT/nt1VR8c/SbdC385dzCbXboXKMZ093c77W+e83POHvlZvzC/N7v1bwcBGKz2+f5xsh2quF3V1c6T/jsPnuutw4NNeqbbz+ak77cN+2zG4jTvt5jSvfkkHc1fmp93uPd398xneJ6TzJUffLc2bJ7cfjY/u7/zrPfPpn42Y7DM+Op9yvOcZP5q/KALMSzhwps3UijMPKTXZp+/OwsDt+mf7fSN35+vYpyGqnq5qtP55sPYbr6tO+Fs7sUUDlJs/gjpuzqEWfhh665Bsz/5JVf9+ELz8613Qqx+0cHP+CfNz7r5+xw0v7uXf95xHu/OY30w+/I3dwOwFnkhPPn7+TRuxVdTSjvNc3n+zM/34pmOMd5Nh+mbebp/d/Yf5S6mjse/ahJeXvqzaca55o+7+bOp6/pPdQx3S5jjjFk7fwmT8yt5v2WL56EJHw5Cqv/kHbe5/maufPQd2z7D3+qneXJK35Q+jrRB7EuH56s8ti7/2TShS7h7vIZon7fC30Ely+/PyX+fO5+q5t3Z/Gzj0Tt0p6PxtX2fBuuHjdbxHG0jx4/X3/h4L1bpZihJM6e6/cd3fhkGQEA7UJv22baD4f2t3WaR+VbzH8+HM06iTiMPmM0u2Oww1Z9Z0K7O8UR5K1ZvNS+6/LNdy8/3CdqJV/OC/CaH9H7mrMP0zRu7VR37+L6fWv2X6tYyG1fTNz+ats95nXY7C6OeJm/C1HEW6vTZ7X+/fCsMWB4Dq5/Vu2ESXm0Wk7th9ePf0VhX15/U9XwmSFidhxdyzXdx2izCzof+PAjr242M/5rMNmEjevpPzc+gajZ8C5Ar4JeZe7RjyYuHe2ucK8+aedtn9fzw1tDHkfz+qUL1agxpmv9jWLE2dAltgPeJ+eRqPBy0N9/5V8PRz7Wv+dRsU8bWTZq3Zj3M0R6Zw47x+ySgXY6AdqA24bNtB8SX6ivrmkw902KgNNHqxmOB+zQM10yIwSpduHjj+5WHlR1JL4SdO3+4/KfT/DUPQtmU9kJ/C6d7IcVbQxq/jyf8zQT116H/MdA415FHNhzXsRGxpE3YiC5pIZhi3L/zx3cuneaveSyUnYae5O9SneoPhzSOtBXE1eStZh1xNfT3/rGG6FAPmxBndbR5kdJsbBW2TQbxdRj22u2Bs+Y6QxlXH3Kr+Zf5ZOgFBycloF2OHrSsXV7QT0K80gyru2Eo2uMxaa/559q78C83DtK8vn7ny9/sB06sDWUPX/h1zEHNYXvcqATTWFXTSVXlCYkQA05oMY6/n3/bLFJCz7aHMn7/tPE47zcweNRP49zFj/fn8x+vG+NO7kEVV6ya91uet8Tt9jtfwDuurehN6XzzbFzNz4YQqRyPjiX9V7Pl71KM1c0hjCMPv3/yBL531hBLeTQsm0+LGFzzezXG6STG0P7MU9yvD3/8xLt12PKJi61zL1xJab43hHH1IbmCd9d3iUwF7UCN8bN9dEJVgNwvxiTrmY4WrvPm5xquhFJ+rifRvBwtYunC2CpoixnH1zx+50n/ZHLu/eZ/dy+UII9xgtpnGkh1+Gq0vUbHsQgcWwXtQ6fLhrTJ82RrHkfan/Ukvd8GokNnDfFcxa0LT6Yt9ij55z7GCtoiv2sFz9NU0C5HBS0r1y5ct87lh3QaStJMAGNV3Wx2s943yXrUQKvEuqMSAh5R3Di+pvG7uGD2WB7jts7tvf7mx9fqH6oPXZr5k9x/73jTcQDV4auRn4+QrjXfgWttNaQNyUG48K83roR6fi2UMq9ajCOrrqj9KZhtL+wpw0PvoPm8fttFU0ceVMtW8UoRQfvptSdW8s+9+ff7YH54/zMbof15MEcLhc3Rsjy+njs3beZp+3c+f+d6YGMIaFmZh6oAroWSHU+yLn786qZXHI0+mH2ckB4WoUG4Fkp85lc0fhdV5fYMbUj38/ne9M2PLm1yQDeWn+eZHG9IvnljNg/puqB2/R5sgNWFVhIeBwlv/L7TedJPVW9pWkww+7jmHTSpqm9/dfHjDw7/XF3f1M2wv2nZMdK9rweOwucPmufiajP/mDmxsn5Fz12PLTZTm3Xo3vz+/dd8hzZDzLuS4YyKK10+8mGqY+e7mMvezPq40lsc5Mb9k0n16Qh3R++lun5v04K6jV68PsyRNU6p5BYHxZ5+eJrm+a3m9dv/35KVTG1oEOPNsb3fUojXNrFKYxSLuG4VFdSW3uJgbN+/mOLSQWQ75/x5/X5M7ZxzPJp30CaGLMbY8FNbmQJOrJTe4mB0c9eHrHOelj/HqnphGs4gxvRqcSfL2ownvhdWoP5Ldes0z/1WoSHrMq40/86ha1Ws9ptfZoHjF/EHI90d3c7VWM1O+MtfffHOSh7ioSnuyN0qPVRRGw7De2O5bRMet6hc+jSM6blvnt+6qr7Nx/rPOsF9/V8+/m0bGozw/ZarNH518cbu4fz+25sQIDwI2utRHrNdRn72py6UW60cQk5enP+2+f7thRFJMV2d/Hy+2yzuzxREHhV4zMdY4HFUTbt17vvXL3703p0v3v0gjJwx9iHHbWV+Pt/rutKcnzRr1l+3GcRI16zrnKflcHbDcsLtlf37vnR4EE6RE1YBOjKZx+0LF2/cXAyMo5YnoE1I933eXQojlSfJ7S7qiF90Z5YXDpPwabOAvTnm7wCbKW/KNAFNrqAY7QS3CWnfP81fk5/zPB6OrqLrMfmm9sm5c1+P+t22+Fm23/Fx9kDsxlF/0e/zs9JeCEpn2pvEX5p/XWCF0cnkIPIM40j77qmq0T+XMcbfnvYdVJLFGPupMfYJjgs9mneQ9UO38gZ6s2bdDyNfsx7P0/5ns04PjJKAlu5Mws3RTjaf5IwT0BIsJsnfhhEeD+nUUd+1r5vd8L0AI/CrvGjcgE2204S0bUVX85yHTRkPj6q8vh3j5L99tzX/bsG77cQWVV/f5mq4wNLa47fNeJJCGPfiejFHPuk4sghXNqYgoO0r2Wzyh5F5aIzdDTzLdFFNPepN33XIG4h5Q2DsG+iPODoR9vWFf77hORshAS1d2rwKi5GFtMeVRZsQ0HRmsRv+q4vN4gIKFv87XEulX+p4CicJadsjmhtQ0fUE23nyP5aQ9rF3m2rQ08pznRC/9p5bThMgtHPGjRlPcogwqT591hy5DVcu3ri5UeHKsWaTfywh7XFIZow9nVxNnT831bRnk0/vtqcRNnNDYLs9zZnbOjAqAlpY1khC2rwLp7Lo7Dah7QUjt0knIBaeFdLmSe+YWz2cwChC2jZk927rhPfc0qYbt9nzjDlyDvVG3erhJEYQ0ranTH4+VzV7drtjby20Mk1AOfrTCM9Th30h7bgIaKELhYe07bHm5iUX7Hov55RH+oD+tUdNHzsmtrhoYj+w/bwKuCHL77YND9m7t2iBobUPJ9Z8Z7Ym5z59uJfxcTi78eFK1oS0pfakbTcyN/OUSbd+ukBOywNOr5mvakM0HgJa6MoTJqBDd3y0bJOONa/c4qZ4u5lQkEl4cOFfrgYSzj7keAPSu42fbOfWPmO+6Ihu5Ytttl6sH3xfJi/Nbwpnf9Ke5igsnFv0rN8PNsA6M/YL5FidZjNaq4yRENBCh9qbFV+si+jR5mjZijWTVjvhUIztdoMtX+CTq4F4VN6AfChcGbL8M/RuW48cKulLy0m1LTL++cZueyGY4/B/ownn3i/lBJYNsNU5zSWm8JDt0jbTeTIBLXQtH1UaeDDXhhA/n3+remG17IRDOdoNtq1z3wfVQE/UhisDPxnQvtuaBYp32/q034uLH9+0KOREJmGzbls/naOWMgN/lnI4awNstYS0nElBm+k8nYAWViDvgg/1mMHxAla/qPVo+1tqdwCMQR0+GGp44N3Wo2ZjeuvFucodWFYzflUvHQ42wBbOro+QlrPIm6b60ZZNQAursT3ZOje4W1nz4skCtgf5hs3HLiECKND2ENv4CGf7V1KLJxiyGIZZ5CGcXT8hLWcxidGploIJaGF1pkPbwWr78lnA9mMSbpbSWwzgqWLaG9K7zcbjgDTfjdzuIABLGVqRR9s3WDjbCyfxOLWBV+LzbAJaWKG8gxUGIk+u9OXrVRG9xQCeZxLiYCp6Ji/NPxXODkjuw6/iC5Y1mCKPXzXPs77BPavDB4o8OI0Y4pWhtlvk2QS0sErNovH1N36/F3pmcjUQzfehDRMAyjaI8GBxG/w0MCgqvmB5Q9gIy+25UvM8B/qmyIPT2p5MXrBZWiABLaxYnFS9Do4mV4Mzff3iR8JyoGh9hwdNAHjFxuOAqfiCZfW6EdZW302CliVDcVTk4efByeWWVEL94ghoYdWaF2pfE6x2crUVXNoxMDHG37phEyjcdNpTANe+25oAMDBkKr5gSc1G2JXQk7a3d/McB4ZkV5EHp6EXbXkEtLAGfVUatZcM6M03SG7YBEpXVXE39GARHDB0zfxj68XaEUs4u90+5opt+xjrh0GKMb6vtygn1faitd4sioAW1mO67sHxV0eXdEwDw+SGTaBwsYfqLsFBWVJMV50YgbOrXjzcC2uUn1ftYwZtuy3AgZPZnvz9fBoohoAW1mSdYVzeWdV3dviacMMuOFCy7XWGb7mlguCgPE6MwNnFGN8Ka5Kf0/y8BoZuEBd1UohJ6K1VCqcnoIU1acK4V8OaNDur+s4Wwi44ULJJWF+bg8mk+jRQHq0OYBnT1//XjV+ENah+3jynTigUwcYXpzD1XSmHgBbWZy0TrNff+Hiv+aWXvoCciV1woGS/DmvQtu0RHBQrtzr4nz1dKgfF++/0dlixfKLLCYWCaJXGKVQ/uy8bKISAFtZpDROsOEmqVArT1yVyAB1YeZuDRdseC9HC1VXldA+cwTraHEwm58xFC+MCKE5sMlnbSV6WsxWAtVlMsD4IK9JWz6a0E8YihYNUxVlI9Z+a398LqbrX/vmq3sm/NBOTl1MK52MsvqqqraKdff7uLAAUpmrG4eaXWViRRXBgEVo+7zo4m5VWn/+qeS5TCHthLJr1Q7NIuNv87k8ppYMH64dYbzd/fjuvH5r/tBNW/LmuwfaiivZagGeIKeUK2kuBwRPQwnqtdCLQVs+mULpZM5n6rP7z1v5sduneSf6CXF1VVS9Mm7fP+6WGtYsq2lkAKExshuGwos3H9iLFOKLgYMN518GZbK9ycyON4yTX0frh3OGt2a1/OzjJX3C8fohVyq16pqFAiyraD066ZmJjbeeLVmdf/uZuYNAEtLBeKxscR1A9O4shXf/qDJPP2X+0E7H9/Ef7OZQZ1KosAsoUV3cJpmO3o+NdB2ewqpMKi+rZaShVCndjTO8tu37I67NJVeWLe0urqt2uXjzcCys8ock4VDFOm18EtAOnBy2sWbWiF3+pvWebSeG9FOtLtz+//NpXHSzY7nz5zv6dLy7/Moe9oTB60QKF2l7FJZiqZ8fJuw7OoKpeDiuQUlzLRY+rEFN67/YXl1/pYv2Qi2eatcgrqfl7hsI0wVuxP0PWaEVjCN0S0MKaxarqPKC98OaN3RJvt04pHNSH91+588ff7IeONZO1awVOsqaa/QNF+mv9WujYJlTP5k3Ktl/iUVXL3cXvx2666ovlYGziCqpcS90Ey+NmDOm1r754t/Oq0TvN33Ne16+kgsbi5vM4b0zleWKdSu+5vBG0OIB1S2EVR0GL2zltw9n5/dcWx4tWIk+ypm/8flZV1dexkAtmHFMCilTFndC1qgkkyu+r/oijYCF80vx2Nv9hMnta38B83LYKk/Mx1tMwwuqoSYj5wpJZAE5mBW3MStwEy2NoXdev3VlhL81cTduE169Vk3Nfl9IyzZjKc8XiL8XbCCpoYd06ftG3u98h7IaCtJOrFYezx9p+v3VdTCVtjPGtAFCaWHXa4uCor3qZlz4+Re6z/tqdzy//4+3PL19t/rj1rEtd8rsrt+y5/cW7e/PD+79MdbxUUkXXCfzaiRE4nc5byVTl9Z6N83BpHRcd5TVKXqu0pxzKoM0Bz7WKdlR0SwUtvVpUkhykGB950cZmlzgf1yil6vGUtvOipKvbNvPto6G0EqMmMF1HOHus2WXfv/DmjbxreCUM37TL7wesVA6MYrjbjOEPvq8jH79P6+7D77fms8mfyU4o7xKS5+r66Fys0ig2q/I8p0rp+jJHcY8vsmk2ZGeTyda1kVTUutjmBJ40Tx7zOHJqR++g/PkcHP+pMb+D4n+FV5pf/hQ60F4OVtgmWArp+p1/f/dWWJM89r5+8aPrzZj72zB82y5gPLnjsTUcja+PzmGb56LAy6ZPpMsxhNUQ0LJ2uQKkiumTwzrdet4OaHujZoxXU4ivjmqg/Nn9ndDRLYrNIra0hdosB6ZhzeZbk2vV/flbJXyPLFoZsgdj+Nbh/uzW0zdaFou/vTEez36OXCl5/fCHrbtPPb7ebMJUP6t3m5XA+6N5t3X47zHdvbkdDudFnQx5kuNWPnc62pBcBLV7TWBwN5YRGDzT4sSId92TtePI/FnjyD/9bqfdpB/TOHISzXMV8zvoh60PnrWZfbyGGNM7KFXdtTloLweLoRjtePrnrbWPF7ld2oU3b+SxahoGTpuDZztuMdSMrbeeNbZmYx1fuxxDWA0BLWuzWNRfuv3FyXf2FgHuXh4kR1Q1knuL5KqHpQPaRXuDaSjI/PD+pdCD2a1L95rA6FIT9n8dBm5xEYRFK4NyXAl4+4SVgItblWfNOHWtpD5uZ5ZCE5ql905ym/RiUbCf/2jCtqtjCNtCh6dDqh+b8LrwJlyr7LNeYn/1p3Bi5G/N8jzpJN+b48rq/Eczv7nWzG9Gf6leTOm9wz9v7Z/kO/PQGuLaZOvcp2EEFcfNu2IndKW0Ht+pvj6bXe5lrMjPZPMd+j4M3dGm19XAI9r5a0gfzp+zqfOwsY6vnY4hrMRWinE/nFHzktwL5bn1cBl7Z+bzbwLP8mH958m1O2echI+taqQZHTtZUBXY3mC2ztYGj8vBSbMLnifsw56kx7iKi+TgzJapBMzP/HT35iuTw3neHBnrkdwPb39x+UyLohGFbaH6H/N/CB3062uC7qLHwHVcgpnDp2bR+HYJm47PUv3sfq742g8cHd/+/N1r4Qya+c2119/4/UGsqpthhNpnKtVvn6X36OI5fOXCxY/2Sy/0aNaw/xA6kKuLS+rxnX/+fZy+O5a/Q836YRaGXhST0k7uMXrnD5cdYf/JrP5h8vadJTYC8/jaPDO3qlh9WnqxwUnHkKqqD+pY7YcziEcXGk5DWe41n81K2qecm9en+u5t3fnjO2euZmsGqr1QmHmzezL74+VZYG1SrC/d+WM3L9W8kG1C2lB8SBu7WYSXtohNdf1J6FmK6ZOY4tBDou08eV7HJQjwPF2ETbmCvQlpX6vuz78dWyXtMqHKsfysN+HKe6HwcKX+a/2PoYveZqVVdj1mXZdg5k3HZk70XtFzoskkz2P2w4brYhzJAVbzfdgeSUX+A11teMzPbV1tNgpfDgVvFC6Cj6VVk1jUGBtDnIWe5ZYjzYbYNAzdX+vXgjG11cW4eizP05q12dtNSFv0ZvpJx5DjU3DhDPIlr7FK01CSGO8tk4t2qfADZAxdl+HssTtHx2s/DCXr6rbrwm5frf9ybiU7U6f6Z5hs7YcCVLGASSCj12UlYA5pc5ubMC4fdjX5b6uDUup9E2sZk1TthCWVVtn1uLwgXOslmEdzolkoVCyvyqZzXYYIpX8fHpePJnf5Dpof3n87lCx1VOCRYlGXMM7TvPd1Xw6sUgcnRFYtVtVYTyqdSpfj6rG2cCal66FkqeyTWptAQMvK5D5RXYezx/KFTyW8JFep7T9b1iJ2NoQ+c3mCHkpYvFTVywH6lnu+dRg2LbMjPzQ5vJ7/MLkWOpQrvEp+tzWbsktP/KswKXZx2R7D7XhBeBLzun4vlCqlndyHNmyoVXxncqVfGIvU7YZH/nsV/flU3bRISwVVEednZEAnyoa/iZqCNmkdbp4/rvhNsI7GEFZHQMtqpLj/1QkvkjmLthIrpGKraGPdHgNdymTrXFGL2GYnczB9mpuJ6Xdh4GKd7IDTt9kqer6NJjxoLyzpdtNpsYFUdBXtsoruP9t8J0IPFlU9xX5vJn8/n4YNVa/gVMFYNsLa8HoFa4nDra2VrU9KkE8plHREu5kzDGfOXsfhtx4b+4Wsz5HHjdufn+1OgJMqeh6bkoB24LYCdOzoSOyPKx+48gRrcjgv80bFDpr8N4FnM8GKoRTNP+v7F968Mfobhjuz4RMs+jdf0QR0cVnfLBR8tHmVF5Y0m4+3UohXQom6uAAzltkfsu9LbGIM+83mY5EXIKVJuyHZewukHsxmR2Fq54rpl/ksK9rwyBthxb6DOghXJtXyrWjWKsa3mp/XQDrmFtG4d3uTLwqLdVj5iZJiLp1+MgHtwKmgpXO5kfs6+q8Vc1R9RZrP2RH4cWsnWAF60B4pXFFwkMUBVdSfzepOcJTS5+6JurkAs8iAtglIPws9KrlqMqZyL21axiovTj3c2rpbeCuwe6u8tyDF1OvzuoSlx9hc4BEYtfhf4ZWwmWa3//3yWjb7mnlsqWMIAyegpXPzNVTPHit4gtWFncCo1T+mXwbowRrCplkoWD0/XOkCIKXNfLe1F4QVal7X+6FnxW58bGjP9VUGkLmIIYYw/OPYT5PirVXeW1DfP1xLiDNECjzGL1VpJ2ygVW56PcEswAoIaOnabJ23F2/yBCsJaEevqjdzgkX/5iGtdGzN1V2hUG118Yrfc7EqOFhZwlahl1cM6BKbWSjRZvbEW/nFqSX023+qerWbVHkM3+DLhh1xHrkY407YMOtuM1T0aScGTUBLp9a8c7WxE6zp7s3tkhr8c0ZV3AnQhx9WG6C2LWqayXQo0DouLKnnaRY2UF0X1htxYSiX2BS8YNzElj4r/87Egiu85un+yjc8Sv58lpIUeIxd6uCuk9LkFothzYo+pcBgCWjpVN3DQNUMjgdh0/x4fycwes1kQwjP+qVwd9WVXVld6HHstI5F/QvnDsImquqdUKAUh7NIK3VOVP+1/sewSearH0fmh/eLDA/WcUqh/d8JYSMvUXIJ7fjFtHkn8FKar31OWfQpBQZLQEuX7vVxxK9Ow6hcWadSj4FyOpu4A84QpLUsWmOMRZ5+qNcQxuUK4808Olfmuy3O42CCsGLnRBs2r5nH+iCs2t/9XZFjSFzX2BfTQdgw+QReYPzS5p2y7KNIbBPHEFZPQEuXelmglLrIX0ZSWQmsSowHYS1SmWN3vZ5/7pg2L6BNhfYinU+G810udU60cT3X/7L6KvlyN3rWs0kY5tXmbYL99a/WD5tg8wp5eikS28gxhJUT0NKlnqo2Cl3kLyHVAtpNsIlHlOhfE5IdhHWoq4NQor+sqf1A3LyAtoqxyD6k1Qvx+zAUKnqKsI42MlmJGz3rahkSq81bP2xtbe0EGJue7jSoqjWchGDjCGjpzNoW9Y/bwEUswMqkzVu0nsa6gpXgdmDOQkXP8K3tlEKh1hQqxw0s8GBDFHoa5ezSZvaTZpQEtHSnr0W9xQhAZ2Iypj6Dz4a/cecPly0Ol1XFnQBZ3Lz+mdCxzXqGetr0Oqxt8tA9AS2dqSsVAQClG1I/zcHZwJ7nQMfWeeIs9nP0dym1Nh3AyaW+quHruTkhnRPQAgDAGU2nbkZf2gZeigewEtqoQLEEtABDldJ/BgAGrfof838IQzGpywyL9b6GlXMkm1FSdc+ICGgBBipV1f8JABuiTmVe9FH/tf7HMBRJ/07gKRzJ3gxJYAmlEtBCgaqqPgiMXlRBCzB4k1TthIFIKeyEArnHAADYdAJaKJAjSpuht6b3AD2IJV5oFPJph7QTBqKK8RcB4Alm//FvB4HxU+ABxRLQQokcUdoMLk0BNkksdMyrqpfDQKQQzocCVS/E7wOwcs0YYW45clqkQbkEtFAgO+AbwqUpwCaZV0WOebFOgwhFp//0u50YyuxBe+cPl4vsPwylacaIg8CoaZEG5RLQQqmSCdbYxVRmWAFwFnWY3w0liuH8dHqz92C0ql6YhhJF/WdhjQ4Co6ZFGpRLQAuliqHMhSwnNp+YYAEb5IVzB6FQ1c/u74aexSq9FUrkxnFYmxSCavWx0yINirUVgCLlCVYMxcmhsknDCZ1zGRywQWa3Lt27cPHGQbMBuRMKE6vq180v+6En092b2+Fw3ntIfEbfBWA96ng3VCmUJKVwUOolkn2oFfFAsQS0UKoSJ1ghfXbn83evBQB4kqOF5U4ozzS3OZjNLvWysVb9WO+Wei4u1bUwAdakrn+cTapzoSQxxNntz9+5FABGTosDKFSeYIXCNBOsK0Po0wfAMMWQiq2mrF46vBp6Eifp/VCoOqj2gnXJFw2n0k6zxbSXL0EMACMnoIVCFTnBCmG7zwUsAIM3C4VqNiHf7yNEuPCvN66EVGTVcXZv9uVvBLSwRrHATZHJ5IViN6EATmrjAtqqTjsBRiIWuJBtq2jtggPwBIdbW0WHdZOtczfDGrXv0xRK3vgUzsKaxZC+CaXJVbRvfjQNAF1Lw8kIlwpoC6zey5c4nA8wEikWOMEKYXvdC9izygtfLRkA1idfFBYKrqJtTF9/8+O1VXptbZ37tODq2WZNlD4LwLrNQoEmMd4sYV6e/xkVo7Cpqqo+CAWavvH7QeSESwW0MRV5G/vLAUainmzthzKtdQF7Fhf++cZuEyR/u/Xi/GshLcD6FFnd9ZDmn//ahX+98euwYq//y8e/TSEUXXhQpzQLwFp99fm7sxILrfJm1OSl+adhwHLIM/n5/NvJuXNfC2mhHFWM0zAAm9iDdup4BGNRcqVRXsAOMaTNYWxe9IZJyBPA7RTDeSEtwFrNQunqsP/6xY9W1nogv6diSkX3dE8pHOg/C735JJRpeuHix4M8iZfXNZOq+rY91ZDDZCEtG+iwTiUWcYYY41thAJYLaGM4CAWahKjJOKNRcqXR0ELavHmTd70fX/QKaQHWJ1d3NYvbg1C4ZrL/267fcXmxf+HNG1+XHs5mMcRZAHpRhXQrlCqmvWYc/HQo8/K8fvjVmze+zeuaR/4fQlo2UT0vMqANefPnn2/shp4tFdDWKf0plGnaRVWDsIYhONza+iAUrD0KmidZPU5e8nGkvOBtNm++flovPyEtwPrEmEqt7npE+477lxvfd/GOu/CvN67k1jvNb6dhBOZp/mEAelFsm4Of7Oaiil7XD82a4MLFGzfz+uGp7WaEtGyY2X/820Eo1STc7OJZXSYvWK4HbYzFDuptVcMSIW07Sc4vBWENPRvBhSrZbp68vP7G7/fCGrXBbJ5Y5eNIJ1jwCmkB1qP0zcdH5AX61rnv82bkaasz2rY7zXw1h7yhDvkzGcX7R3sD6F8VUtmbJIuxNZ9UWGcA2o7Lb378/uSl+ffNLtzec/8CIS0bpuDNn+1lntXjVonL9MreCsuI6SAnFqXKIe2Fix+/PJ//eP0kSX/+wKuX6isxpr1mkryT/1z14uFe88t4FhEUKYZ0PYVhNLY+s2byEqvqZrMIfT/N6+t1PZ+tYgeuDVdfOjy/aHUyDaf0UEj72mx2qeTKA4DBypuPTaA5CyOpFl3YDZOw2/x7tRurKaTv4jzenU8e7ddW1dVONQkvp5TOhzCf5rd8Xu2MSqqvB6BXh3W6NanKb/2XTyo0ocpes66fnXRdfxZtK7QQrxyNy6fcLPsppH2t6ApDOIFm1nIQSr3EdPGsvv7G76/f+fI3+yf5S/LYsBWrt1Ka7zV/fR4b7uXM4SxZwVIBbUzxIJSuCVubnbc8oO+nUH9Xx/BgN38yj9spxu08SQ51mqY4P/qSPTRJXjQTFtDSq3xM6fVmwRfHUFmzCGonVRXy4rxZoH6Wb3leptJmuvu7nerHF6bNwvjVmOa7zZO71OckpAVYvVFsPj5ZfgftxhBzYJvvRnj0/1ulXGE6Wrl6Nm/CBqBXeW49mo2w3KLseF2f1w8hfVM3/4qz3NP8jI7XD4sNs72w7DpLSMuGaNbu31UxlhnQZg8VjjVztVvpMH3z8GZ6mxNWaSdU1csxpXwyajs9OnHbPmsh51IB7fzw/t1mEAyj0AzozYef58k/mbSLg6NJ8tMLhadnTcehS/mYUhrfBXjTZhNkOokxh7XNYxruNuHoQfPnDupU/2fzeN4Lqfrp2Yv1dvOsNn9Uv2gGy+3mv7/T/Pd3wmHz55oFb5cVSEJagNVqNx8v3mjG/Cf3BqdM+XIw4QQMw0g3wqbNODNtlvLvP7R+uNesH+4+a/1Qxeof6hys1On8w+uHTjfMhLRsgGbedhDGIGcJIV1tcsGrj2ymtzlhDM8aHM5ayLlUQJsHldFU7S1BmwOGIPfrqw7nV8b8POZQtPnlfN6hagfFPE7GhwfGxcC5GCxX3YFFSAuwYileb8b5m4HRyEeQAzAIeSNshO1kHrFYPzTLgzR91vrhaH2x+vWDkJaxa54zPebPWMi51CVhWTN+bfyHv0jHoVe5X1/xzf4L5OIwgNW58+U7+/lIfGAcUtwXSMCw5CrawHq5OIwRyyftA8eFnKf7a8KSmr2n7wJT4QxDkKtoC741sVhCWoAVylW0jILqWRier476tM4C6yWkZaTyRqxM4myFnF1U0M4CZ0rHoWu5ijbU8b3A2glpAVYjV9EG883ipZCuq56FYVJF2xMhLSOVL/oOnLqQc+mAdr41mQW0OWAwLGT7I6QFWA3hQdlym4o7n797LQCDtKii1SqtD0JaRihWWqFmpy3kXDqgbSv2hEHZ9PX/deMXAQZgXteqaHsipAXonvCgcKkWsMPAzbcm1xxL7omQlpGpJ1v7gVMXci4d0GYpKl9u/ZguBRiA2Ze/uavaqD85pJ28NP80ANCZNjxwYVh5Uty/8+Vv9gMwaLnwKoZgPdsXIS0jopDzgVMVcnYS0ErHj8QQXw0wEF8dHSV0tKA/0wsXP74ZAOhEnuxX0WZ4SXKg7mIwKMftzy/fah7cTwL9ENIyIgo5F05RyNlJQCsdf2A6ffOjaYCBmB/ef9tRpR7FtCekBeiOVgeFSbWLwaAw83NbV51W6JGQlpFQyHnkNIWcnQS0R/+jjlNnzQc6DTAQ7aIoeTZ7JaQF6NTtzy9fDU6IDF5q1gZaG0B5cvFVneq3A/0R0jICCjkfOHGbg84C2lzRoFIvNwGufh1gQO588e4HQbVRv4S0AJ1qT4io8BquFO7eOWq1BBQo32eRUnLpcJ+EtIyAQs6FE7Y56CygPfqbJSFQSjvaHDA0i2qjWaA/QlqAzuQTIrnCS3HA8Bz1nb2v+g4Kl4s8hCs9E9JSuEVrqlnYcCct5Ow0oD3c2vrARFmbA4ZpvjVRbdQ3IS1AZ3KFV6hrFV4DktcB9fz+a/rOwji0lw67NKxfxyHt9OZ2gALZ6AknLuTsNKBte0zUceMnyjHEKwEGpu0n1SyahLQ9E9ICdCb3ODXxH4Y2nK1r4SyMTL40LOj73a8mpN16cS6kpUiqaI+cpJCz04A2u/PlO/vBh7+tzQFD1B4JFdL2T0gL0Jlc4SWk7V+ch0ttVTMwKrnIY741eS0IaXuVYjgvpKVU88P7J+rBOmYnKeTsPKDN5o6bhUmIuwEGSEg7EDmk/ecbxgmADghp+5MrZ1OsL93+98u3AjBKQtphyCFt9dLh1QCFyRmEedrzCzlXEtC69bF1oibA0Achbf9S84KymAXojpB2/Y7bGtz542/2AzBqOaS9/fnlV/Sk7VHz2d/JfYGhQF8dfXc3epPneYWcKwlos3zrY9jsVgfaHDBobUh7bvJK81sh4ZrlcNbkCqB7efKf6vqSS2tXL2/ytj1ntTWAjXL7i3f3bIb1oAln82cfoGDzw/tvb/gc7ZmFnCsLaLNNvzVemwOGbrET/rZJ1voIZwFWK18cloNDp0RWKIW7+SSOcBY2U7sZ5sTs+ghnGYmjVgdhk/vRPrOQc6UB7YNb4zc3IdfmgCIcVRxFFUcrFpuJrHAWYPVycJjnoEG/xFX4cP7nyWt5kRWAjZVPzM4P7//SZthqtW3RhLOMyO3PL9/a5AKxZxVyrjSgzdpj1LmKYTODH20OKMadL9/Zrw/vv2KS1b38mTYvode+Omr9AsAa5Dlo7pfolEg38lw+bzQ2n+nV2eySDV3gwb0W+tJ273jMVdzBGG34vQFPLeRceUCbtVUMG3rUrIqVKlqKkSdZd764/EuL2U7N8sS1eQnNAgBrt1gEaHmwnFnexLXRCDyu3Qz74t299jSecbYTxz2+jbmM2QaHtE8t5FxLQJsdHzXbtEG72fXanU5vbgcoSB4sHVla3qLSyDFQgJ7lTTJVXqf3UNWsdxnwTO1pPONsFz6s/zx5RY9vNsGm9rN+WiHn2gLa7MERiM26NX47vHR4PkBhjqtp7YafyWxe1yqNAAbkuMorj8/eayeiahY4leNxtvntRl8WfhbHLdG0kWHTtP2sN2xu9rRCzrUGtNmiH9hG3Ro/CfH9AIU63g3X9uD5Hqk0susNMEh5fLYB+UyzRUigahY4k3wJkHH2ZNr1Q7POylWzWqKxqR5c7ro5FfhPLORce0B7bMOOUJ/X5oCS5QXa8TPr2NLfejCx+mHyS5VGAGV4eANSgHBUvZXq+lIOZoUEQBfyOHt8v4Vx9glSbC9pzussVbNsuk3rZz0J8crjf663gDbboCPU29XP7u8GKNyD46FNUGui9Vgwa2IFUJzjDcgND2pnOZjNc/I7X/5mPwB0LI+zKmof0gSzeT11+4t3LjmpAI/aoH7W08cLObfCAOQfQPPL/utvfLwXYno/xrATxmVWh+C4M6OxmEhcy3/k5zZWKTe5noYNkYPZKqQP5z9sfXBHKAtQvCe813JVw9jvEMitDK6rlgXW5Xjdf+HNG7l4Ka8fNqaI6Xj9cNisHxR1wLMt5mV703/63bXJZOtaiPHXYWxS/Ju7uQYR0B4bYVBr4svoHT+3zeC5M9k6d7XZFX9rhJss7aSqeTHcqlL9yW3PNMBoPXivvfH785MYr6YQXx3Ley2mcLf5P58JCIA+5R61zS+38vqhql6YjnxTbBbm4cP6vyYzhR1wOo8HtaXPyY5O4IZP5of3P3hS9fygAtpjxxPjX7350bQJe/ZK+iEcf+BNMHtLMMsmWQwwV/MfeVFbVXE3hvhWKHiydRzKNpOqb+q/VLcsZgE2x+Kyx738+xLnpA+528xLP2t+nX31hbkpMByL9cN+WBR7LMLaok/mLfKAuymlz+o/b+1bP8DyjoPa/PtCT/DOTjImDDKgPbYIOPMfDybGTVjychha4JP76MTwWQ5lVdbBg0Vt/uPaorL2fEhpd5DP70OOJ1TNs/xN8x9nnmcAsofnpO0mZIzTGONbzXvjfMw38Q7Ig83Fuv6uPnd4a3ZLf0Ng+B4Ja6c3tycvzafhKIB5OQw/iJk1f3yX84D5D1t3hbKwOg+f4F1s6uT52HRI87FHNmpOMReLoUAPAp/FgL3OyfHxB9389rtUx7uq6uB08oRr66XD83VqntsYX23+1E7oIbRdPMsHzW+/aQbOgzql2SJYHqQLF298H0bYOqJU6YWwc+cPl/8UgI3XBrZhcr5ZIOR3Wb/z0hd+nAlkgTHKBVvt+iGvG2L8RR8bZMfrhxTj3bwJVsVw91AgC4PwYAP9aIxYb2HYUdFmDmS/WWZcKDKgfZIHoU9d7YSq3gmx+kVMaaf9f6ajUCPFsP20QbwdbFM4+gBjG9rcawbeeyHVfwp1dVCH+d3wwvyeSS+sxnT3dztbh1s7x89wDDE/q78IR8/sdvOQHj27zwgpH3uO86/5OT5oxoL/zCFsSNW99ln+y7mD0iZSAtphEdACz/L4O+2ReeninfaseWl4+Jbz2IYBR++ykO49mJcW+C4D6NJxBpCadUMzPp5/bP3wIAc48/rh4TFXFgDFyaHtVhW38+ZO83xvPyknfOYa+3g+tqZsYTQBLcCYCWiHRUALAABAV6oAAAAAAEAvBLQAAAAAAD0R0AIAAAAA9ERACwAAAADQEwEtAAAAAEBPBLQAAAAAAD0R0AIAAAAA9ERACwAAAADQEwEtAAAAAEBPBLQAAAAAAD0R0AIAAAAA9ERACwAAAADQEwEtAAAAAEBPBLQAAAAAAD0R0AIAAAAA9ERACwAAAADQEwEtAAAAAEBPBLQAAAAAAD0R0AIAAAAA9ERACwAAAADQEwEtAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAr938BsR77UqUe+fQAAAAASUVORK5CYII="
          ></image>
        </defs>
      </svg>
    );
  }
}

export default Logo;
