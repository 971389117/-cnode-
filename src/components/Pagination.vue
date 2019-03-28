<template>
  <div class="Pagination">
    <ul>
      <li> <a @click.prevent="changePage" href="#">首</a> </li>
      <li> <span class="xunipage" v-show='pre' href="#">...</span> </li>
      <li v-for='(btn,index) in btns' :key='index'> <a href="#"
          :class="[{currentPage:btn === currentPage}]"
          @click.prevent="changePage(btn)">{{btn}}</a></li>
      <li> <span class="xunipage" @click.prevent v-show='last' href="#">...</span> </li>

      <li> <a @click.prevent="changePage" href="#">尾</a></li>
    </ul>

  </div>
</template>
<script>
  export default {
    name: "Pagination",
    data() {
      return {
        btns: [1, 2, 3, 4, 5],
        currentPage: 1,
        base_page_counts: 670,
        pre:false,
        last:true,
      };
    },
    methods: {
      changePage(page) {
        if (typeof page === 'number') {
          let btnLen = 5
          let bLen = Math.floor(btnLen / 2)
          let btnCenter = (this.btns[0] + this.btns[this.btns.length - 1]) / 2
          let cha = page - btnCenter
          let subBtn = []

          this.currentPage = page


          if (cha > 0 && this.currentPage < this.base_page_counts - bLen) {
            for (let i = 1; i <= Math.abs(cha); i += 1) {
              subBtn.push(btnCenter + bLen + i)
            }
            console.log(btnCenter)
            this.btns.splice(0, cha)
            this.btns.push(...subBtn)

          } else if (cha < 0) {
            for (let i = 1; i <= Math.abs(cha); i += 1) {
              subBtn.unshift(btnCenter - bLen - i)
            }
            this.btns.splice(btnLen - Math.abs(cha))
            this.btns.unshift(...subBtn)

          }
        } else {
          this.currentPage=page.target.innerText==='首'?1:this.base_page_counts
        }
        console.log('===',this.currentPage)
        if (this.currentPage < 3) {
          this.btns = [1, 2, 3, 4, 5]
          this.pre=false
          this.last=true

        }else if(this.currentPage>=this.base_page_counts){
          this.btns = [666, 667, 668, 669, 670]
          this.last=false
          this.pre=true

        }else{
          this.pre=true
          this.last=true
        }

        this.$emit('jumpPage', this.currentPage)
        // this.getPageCounts()
        // this.$http.get('https://cnodejs.org/api/v1/topic/$')
      },
      getPageCounts() {
        this.$emit('getPageCounts', this.base_page_counts)
      }
    },
  }

</script>
<style scoped>
  .Pagination ul {
    display: flex;
    list-style: none;
  }

  .Pagination>li:first-child>a {
    border-left-width: 1px;
    text-align: center;
  }

  .Pagination a,.Pagination span {
    font-size: 14px;
    display: block;
    text-decoration: none;
    color: #787878;
    padding: 4px 11px;
    width: 40px;
    height: 30px;
    border: 1px solid #797979;
    border-left-width: 0;
  }

  .currentPage {
    background: rgba(0, 0, 0, .1);
  }

</style>
