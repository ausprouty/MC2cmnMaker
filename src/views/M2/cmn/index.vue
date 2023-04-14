<script>
import {useShare} from "@/assets/javascript/share.js"

export default {
  
  methods:{
    vuePush(id){
      this.$router.push({
        name: id,
      })
    },
    share(what, v1, v2){
      useShare(what, v1, v2)
    }
  },
  mounted() {
    localStorage.setItem("returnpage", this.$route.name)
  }
}
</script>
<template>
  <!-- sdcard template from mc2 -->
  
  <div class="page_content" dir="ltr">
    <div  class="app-series-header">
    <img src="@/assets/images/standard/header-front.png" class="app-series-header" />
  </div>
    <div>
      
    </div>
    <div>
      <!-- begin mc2 sdcard bookImage -->
<div class="Xapp-link">
  <div class="card-link" @click="vuePush('cmn-hope-index')">
    <div class="Xapp-card -Xshadow">
      <img src="@/assets/sites/mc2/content/M2/cmn/images/standard/Hope.png" class="book-large" />
    </div>
  </div>
</div>
<!-- end mc2 sdcard bookImage -->
<!-- begin mc2 sdcard bookImage -->
<div class="Xapp-link">
  <div class="card-link" @click="vuePush('cmn-prophet-index')">
    <div class="Xapp-card -Xshadow">
      <img src="@/assets/sites/mc2/content/M2/cmn/images/standard/Prophets.png" class="book-large" />
    </div>
  </div>
</div>
<!-- end mc2 sdcard bookImage -->
<!-- begin mc2 sdcard bookImage -->
<div class="Xapp-link">
  <div class="card-link" @click="vuePush('cmn-multiply1-index')">
    <div class="Xapp-card -Xshadow">
      <img src="@/assets/sites/mc2/content/M2/cmn/images/standard/Multiply1.png" class="book-large" />
    </div>
  </div>
</div>
<!-- end mc2 sdcard bookImage -->
<!-- begin mc2 sdcard bookImage -->
<div class="Xapp-link">
  <div class="card-link" @click="vuePush('cmn-multiply2-index')">
    <div class="Xapp-card -Xshadow">
      <img src="@/assets/sites/mc2/content/M2/cmn/images/standard/Multiply2.png" class="book-large" />
    </div>
  </div>
</div>
<!-- end mc2 sdcard bookImage -->
<!-- begin mc2 sdcard bookImage -->
<div class="Xapp-link">
  <div class="card-link" @click="vuePush('cmn-multiply3-index')">
    <div class="Xapp-card -Xshadow">
      <img src="@/assets/sites/mc2/content/M2/cmn/images/standard/Multiply3.png" class="book-large" />
    </div>
  </div>
</div>
<!-- end mc2 sdcard bookImage -->
<!-- begin mc2 sdcard bookImage -->
<div class="Xapp-link">
  <div class="card-link" @click="vuePush('cmn-tc-index')">
    <div class="Xapp-card -Xshadow">
      <img src="@/assets/sites/mc2/content/M2/cmn/images/standard/TransferableConcepts.png" class="book-large" />
    </div>
  </div>
</div>
<!-- end mc2 sdcard bookImage -->

    </div>
    <!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div>
<!-- end default library -->
</template>
<!--- Created by publishLibrary-->
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->