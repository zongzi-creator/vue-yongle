<template>
  <div>
    <!-- 优惠券列表 -->
    <div>
      <van-popup v-model="showList" position="bottom">
        <van-coupon-list
          :coupons="coupons"
          :chosen-coupon="chosenCoupon"
          :disabled-coupons="disabledCoupons"
          @change="onChange"
          @exchange="onExchange"
        />
      </van-popup>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>