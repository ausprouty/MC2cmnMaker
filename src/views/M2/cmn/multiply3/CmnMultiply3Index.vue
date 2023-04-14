<script>
import { useShare} from "@/assets/javascript/share.js"
import { useRevealMedia } from "@/assets/javascript/revealMedia.js"

export default {
  methods:{
    pageGoBack(returnto){
      if (localStorage.getItem("returnpage")) {
        returnto = localStorage.getItem("returnpage");
        localStorage.removeItem("returnpage")
      }
      this.$router.push({
        name: returnto,
      })
    },
    share(what, v1, v2){
      useShare(what, v1, v2)
    },
    vuePush(id){
      this.$router.push({
        name: id,
      })
    }
  },
  mounted() {
    useRevealMedia()
    localStorage.setItem("lastpage", this.$route.name)
  }
}
</script>
<template>
  <!-- sdcard template from mc2 -->

<div class="page_content" dir="ltr">
  <div id="nav">
    <div class="nav full internal-link" @click="this.pageGoBack('cmn-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
  <div  class="app-series-header">
    <img src="@/assets/sites/mc2/content/M2/cmn/images/standard/Multiply3.png" class="app-series-header" />
  </div>
  <div>
    被耶稣差派
  </div>
  <br />
  <br />
  <!-- begin chapters -->
    <!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-mutiply3intro')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">奉主差遣：天国扩张</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply3intro1')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">阶段一：建立本土教会</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply301')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">1.</div>
                            <div class="chapter_title series ltr">耶稣被接升上天——颁大使命</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply302')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">2.</div>
                            <div class="chapter_title series ltr">门徒寻求神替补——编制工人</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply303')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">3.</div>
                            <div class="chapter_title series ltr">圣灵降临显大能——预备工人</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply303a')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">3.1.</div>
                            <div class="chapter_title series ltr">《怎样被圣灵充满》</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply304')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">4.</div>
                            <div class="chapter_title series ltr">彼得向群众讲道——开始布道</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply305')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">5.</div>
                            <div class="chapter_title series ltr">信徒成使命群体——建立聚会</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply305a')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">5.1.</div>
                            <div class="chapter_title series ltr">《二十一世纪的华人差传策略与方法》</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply306')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">6.</div>
                            <div class="chapter_title series ltr">神迹见证福音真——见证福音</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply307')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">7.</div>
                            <div class="chapter_title series ltr">逼迫中大放胆量——勇对挑战</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply308')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">8.</div>
                            <div class="chapter_title series ltr">圣灵清理假信徒——真实敬虔</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply309')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">9.</div>
                            <div class="chapter_title series ltr">逼迫中蒙神拯救——信靠顺服</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply309a')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">9.1.</div>
                            <div class="chapter_title series ltr">《宣教士：安乐欢》</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply310')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">10.</div>
                            <div class="chapter_title series ltr">领袖兴起需不断——领袖发展</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply311')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">11.</div>
                            <div class="chapter_title series ltr">司提反被捕——扩展召逼迫</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply312')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">12.</div>
                            <div class="chapter_title series ltr">司提反辩护——逼迫中卫道</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply313')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">13.</div>
                            <div class="chapter_title series ltr">司提反殉道——逼迫促扩展</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply313a')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">13.1.</div>
                            <div class="chapter_title series ltr">《宣教士：裨治文》</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply3intro2')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">阶段二：建立宣教胸怀</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply314')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">14.</div>
                            <div class="chapter_title series ltr">腓利在撒玛利亚传道——近文化宣教</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply315')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">15.</div>
                            <div class="chapter_title series ltr">腓利向非洲太监传道——跨文化宣教</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply316')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">16.</div>
                            <div class="chapter_title series ltr">保罗遇见耶稣归向主——神呼召工人</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply317')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">17.</div>
                            <div class="chapter_title series ltr">保罗放胆传讲主的道——初信的火热</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply317a')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">17.1.</div>
                            <div class="chapter_title series ltr">《宣教士：包忠杰》</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply318')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">18.</div>
                            <div class="chapter_title series ltr">彼得在耶城外传道——跨地域宣教</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply319')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">19.</div>
                            <div class="chapter_title series ltr">彼得被差进外邦人——被预备宣教</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply320')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">20.</div>
                            <div class="chapter_title series ltr">彼得向外邦人宣教——跨文化宣教</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply321')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">21.</div>
                            <div class="chapter_title series ltr">彼得分享宣教见证——众赞同宣教</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply321a')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">21.1.</div>
                            <div class="chapter_title series ltr">《宣教士：阿德希》</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply322')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">22.</div>
                            <div class="chapter_title series ltr">安提阿教会的成立——差传的基础</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply323')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">23.</div>
                            <div class="chapter_title series ltr">恶有恶报神道兴旺——马可的出场</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply3intro3')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">阶段三：开始开荒宣教</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply324')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">24.</div>
                            <div class="chapter_title series ltr">教会差派宣教士——教会差传的开始</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply325')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">25.</div>
                            <div class="chapter_title series ltr">省会犹太人宣教——异地同文化宣教</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply325a')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">25.1.</div>
                            <div class="chapter_title series ltr">《宣教士：艾得理》</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply326')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">26.</div>
                            <div class="chapter_title series ltr">省会外邦人宣教——异地跨文化宣教</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply327')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">27.</div>
                            <div class="chapter_title series ltr">城市传基督宣教——城市的宣教策略</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply328')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">28.</div>
                            <div class="chapter_title series ltr">城镇行神迹宣教——城镇的宣教策略</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply329')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">29.</div>
                            <div class="chapter_title series ltr">回程坚固初信徒——坚固初信徒信心</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply330')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">30.</div>
                            <div class="chapter_title series ltr">论外邦信主条件——开放跨文化信仰</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply3intro4')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">阶段四：更远开荒宣教</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply331')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">31.</div>
                            <div class="chapter_title series ltr">再次出发重整团队——因马可分两队</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply332')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">32.</div>
                            <div class="chapter_title series ltr">圣灵带领进入欧洲——福音西进</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply333')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">33.</div>
                            <div class="chapter_title series ltr">难中神预备人——腓立比</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply333a')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">33.1.</div>
                            <div class="chapter_title series ltr">《宣教士：古约翰》</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply334')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">34.</div>
                            <div class="chapter_title series ltr">会堂辩道策略——帖撒罗尼迦、庇哩亚</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply335')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">35.</div>
                            <div class="chapter_title series ltr">公开卫道策略——雅典</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply336')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">36.</div>
                            <div class="chapter_title series ltr">会堂辩道策略——哥林多</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply3intro5')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">阶段五：倍增当地领袖</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply337')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">37.</div>
                            <div class="chapter_title series ltr">归正福音——福音传讲有力（以弗所）</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply338')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">38.</div>
                            <div class="chapter_title series ltr">辨明福音——福音传遍全省（以弗所）</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply338a')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">38.1.</div>
                            <div class="chapter_title series ltr">《宣教士：富能仁》</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply339')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">39.</div>
                            <div class="chapter_title series ltr">见证福音——福音改变文化（以弗所）</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply340')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">40.</div>
                            <div class="chapter_title series ltr">持守福音——福音震撼城市（以弗所）</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply341')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">41.</div>
                            <div class="chapter_title series ltr">回程坚固教会——马其顿、亚该亚</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply342')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">42.</div>
                            <div class="chapter_title series ltr">招聚坚固领袖——以弗所教会领袖</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply3intro6')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">阶段六：辩解外邦宣教</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply343')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">43.</div>
                            <div class="chapter_title series ltr">预言会被抓——去耶城路上</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply344')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">44.</div>
                            <div class="chapter_title series ltr">圣殿中被抓——耶路撒冷</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply345')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">45.</div>
                            <div class="chapter_title series ltr">圣殿中辩解——耶路撒冷</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply345a')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">45.1.</div>
                            <div class="chapter_title series ltr">《宣教士：杨格非》</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply346')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">46.</div>
                            <div class="chapter_title series ltr">公会中辩解——耶路撒冷</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply347')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">47.</div>
                            <div class="chapter_title series ltr">谋杀得保护——耶路撒冷</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply348')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">48.</div>
                            <div class="chapter_title series ltr">巡抚前辩解——凯撒利亚，两年</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply349')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">49.</div>
                            <div class="chapter_title series ltr">新官前辩解——凯撒利亚</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply349a')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">49.1.</div>
                            <div class="chapter_title series ltr">《主仆：宋尚节》</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply350')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">50.</div>
                            <div class="chapter_title series ltr">王上前辩解——凯撒利亚</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply351')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">51.</div>
                            <div class="chapter_title series ltr">海难中应许——去罗马船上</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply352')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">52.</div>
                            <div class="chapter_title series ltr">海难中得救——船登岛岸</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply353')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">53.</div>
                            <div class="chapter_title series ltr">岛上蒙保守——马耳他岛</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply353a')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">53.1.</div>
                            <div class="chapter_title series ltr">《主仆：史祈生》</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('cmn-multiply354')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">54.</div>
                            <div class="chapter_title series ltr">软禁中辩解——罗马</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->

   <!-- end chapters -->
  <div>
    <!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
  </div>
</div>
</template>
<!--- Created by capacitor - publishSeries-->
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->