import test from 'node:test';import assert from 'node:assert/strict';import {total} from '../assets/cost.mjs';
test('adds shipping and deducts only immediate coupon',()=>assert.equal(total({price:16000,shipping:600,coupon:1000}),15600));
test('free offer is zero',()=>assert.equal(total({price:0}),0));
test('rejects invalid money and excessive coupons',()=>{for(const price of [NaN,-1,Infinity,1.5,10000001])assert.throws(()=>total({price}));assert.throws(()=>total({price:100,coupon:101}));});
