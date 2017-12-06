function performStep(index, map) {
  const steps = map[index];
  const newIndex = index + steps;
  const newMap = map;
  newMap[index] += 1;

  return {
    newIndex,
    newMap,
  };
}

function stepCalculator(inputMap) {
  let map = inputMap.split('\n').map(x => parseInt(x, 10));
  let index = 0;

  let numSteps = 0;
  while (index < map.length) {
    const result = performStep(index, map);
    index = result.newIndex;
    map = result.newMap;
    numSteps += 1;
  }

  return numSteps;
}

const result = stepCalculator(`1
0
0
1
0
-3
2
1
-7
-6
-9
1
0
-9
-12
-10
-6
-12
-2
-12
-6
-8
-11
-11
-6
-24
-22
-6
-16
-12
-11
-29
-20
-6
-27
-25
-16
-28
-36
-34
-27
-9
-31
-3
-41
-37
-21
-44
-5
-41
-6
-37
-46
-2
-16
-8
-2
-43
-3
-22
-37
-1
-55
-44
-21
-53
-26
-2
-31
-33
-14
-22
-30
-5
-17
-34
-75
-24
-12
-7
-57
-72
-10
-25
-66
-78
-22
-5
-66
-84
-75
-23
-61
-60
-81
-87
-82
-36
-96
-63
-92
-87
-82
-19
-68
-79
-48
-61
-29
-83
-18
-81
-45
-10
-46
-74
-42
-115
-16
-105
-43
-83
-20
-72
2
-98
-57
-62
-82
0
-127
-40
-37
-43
-74
-65
-47
-53
-19
-27
-39
-118
-69
-85
-111
-140
-15
-99
-57
-20
-46
-25
-140
-21
-48
-86
-68
-123
-119
-142
-45
-39
-110
-49
-86
-89
-87
-1
-127
-66
-44
-133
-12
-5
-88
-68
-27
-75
-127
-149
-152
-93
-108
-118
-23
-130
-68
-23
-8
-174
-168
-43
-67
-143
-167
-6
-152
-5
-57
-105
-22
-141
-2
-169
-88
-191
-123
-21
-18
-58
-182
-62
-114
-17
-16
-102
-37
-127
-114
-55
-87
-40
-216
-101
-1
-117
-148
-75
-158
-18
1
-197
-4
-30
-228
-87
-67
-161
-50
-2
-220
-212
-57
-135
-3
-236
-67
-171
-114
-91
-12
-157
-23
-19
-82
-130
-201
-145
-60
-149
-208
-200
-138
-187
-180
-94
-215
-128
-49
-116
-4
-165
-118
-213
-235
-139
-55
-199
-44
-227
-70
-201
-181
-146
0
-234
-117
-109
-239
-286
-187
-73
-108
-284
-101
-193
-211
-255
-39
-207
-24
-260
-177
0
-267
-278
-88
-258
-130
-140
-213
-118
-167
-312
-172
-43
-183
-208
-25
-90
-139
-146
-105
-153
-141
-258
-155
-178
-303
-171
-297
-236
-51
-176
-20
-120
-230
-218
-154
0
-72
-306
-43
-290
-203
-66
-51
-13
-334
-230
-212
-223
-31
-120
-335
-292
-98
-299
-57
-67
-215
-108
-313
-324
1
-180
-155
-276
-277
-120
-92
-153
-168
-73
-333
-101
-320
-263
-102
-17
-66
-194
-373
-85
-263
2
-319
-77
-8
-329
-247
-218
-307
-169
-284
-2
-309
-275
-282
-3
-191
-297
-302
-100
-105
-356
-60
-189
-191
-133
-368
-107
-51
-346
-403
-52
-129
-327
-289
-24
-341
-111
-237
-46
-13
-308
-110
-365
-351
-236
-341
-42
-97
-19
-131
-213
-116
-151
-431
-390
-77
-116
-305
-263
-282
-229
-238
-386
-107
-134
-25
-247
-431
-90
-299
-338
-94
-204
-61
-30
-46
-184
-95
-185
-289
-311
-63
-267
-294
-296
-141
-456
-400
-129
-422
-152
-131
-252
-422
-110
-215
-134
-425
-35
-356
-104
-446
-395
-351
-135
-353
-410
-114
-61
-234
-261
-121
-296
-450
-116
-197
-343
-145
-127
-157
-372
0
-115
-175
-411
-473
-236
-169
-365
-457
-419
-110
-291
-7
-408
-414
-426
-292
-419
-160
-306
-238
-61
-101
-359
-362
-13
-360
-462
-348
-502
-516
-15
-471
-408
-278
-318
-247
-6
-538
-353
-82
-324
-336
-149
-209
-3
-134
-101
-500
-469
-129
-154
-132
-43
-559
-192
-556
-560
-56
-23
-185
-109
-300
-417
-328
-401
-393
-459
-351
-377
-376
-126
-211
-421
-428
-375
-216
-21
-117
-118
-486
-58
-578
-480
-42
-497
-256
-160
-114
-4
-62
-496
-48
-560
-409
-76
-386
-587
-309
-565
-65
-154
-459
-213
-197
-157
-603
-381
-97
-71
-234
-386
-295
-497
-159
-364
-496
-40
-426
-320
-600
-188
-321
-295
-312
-222
-515
-355
-86
-554
-67
-604
-497
-517
-38
-423
-89
-76
-256
-347
-467
-155
-207
-628
-544
-250
-86
-168
-197
-243
-249
-374
-53
-410
-615
-561
-577
-587
-406
-68
-54
-290
-302
-453
-566
-129
-332
-45
-447
-475
-190
-528
-349
-220
-80
-265
-442
-289
-57
-329
-377
-343
-15
-628
-259
-419
-321
-97
-365
-681
-590
-30
-489
-213
-674
-174
-356
-110
-12
-441
-431
-254
-612
-571
-203
-706
-131
-128
-641
-596
-702
-272
-416
-345
-181
-318
-683
-565
-160
-445
-7
-179
-680
-520
-4
-471
-552
-14
-217
-23
-138
-734
-682
-235
-392
-53
-400
-330
-339
-211
-280
-649
-366
-235
-50
-214
-386
-324
-346
-572
-104
-23
-530
-353
-545
-85
-196
-460
-69
-395
-530
-526
-606
-131
-638
-396
-89
-266
-117
-752
-495
-328
-678
-331
-351
-296
-714
-352
-450
-291
-713
-62
-480
-186
-238
-731
-9
-710
-560
-652
-414
-708
-427
-152
-91
-716
-96
-669
-607
-704
-532
-414
-751
-228
-319
-103
-516
-153
-265
-137
-349
-247
-222
-202
-343
-273
-644
-522
-331
-114
-181
-391
-139
-311
-589
-622
-309
-192
-133
-234
-648
-831
-554
-759
-620
-240
-38
-598
-403
-339
-835
-338
-48
-65
-612
-344
-431
-24
-137
-778
-645
-411
-212
-316
-652
-257
-519
-266
-586
-790
-63
-506
-150
-493
-795
-117
-793
-369
-828
-156
-194
-461
-599
-363
-511
-67
-627
-172
-2
-544
-657
-680
0
-29
-531
-511
-688
-32
-753
-407
-190
-724
-620
-598
-123
-783
-492
-270
-839
-603
-685
-277
-6
-431
-14
-320
-223
-806
-550
-268
-105
-47
-194
-657
-631
-614
-524
-83
-300
-491
-754
-923
-902
-131
-623
-551
-114
-272
-892
-547
-597
-431
-276
-814
-363
-364
-579
-236
-783
-356
-198
-82
-266
-709
-176
-366
-667
-73
-894
-81
-208
-767
-431
-762
-613
-865
-355
-382
-962
-480
-797
-881
-916
-758
-729
-189
-755
-206
-357
-43
-857
-812
-812
-47
-160
-395
-595
-508
-817
-215
-249
-134
-648
-965
-797
-331
-97
-912
-899
-345
-732
-412
-823
-644
-16
-273
-970
-550
-345
-556
-207
-66
-336
-396
-224
-261
-951
-573
-587
-810
-507
-526
-9
-49
-169
-325
-913
-522
-50
-196
-956
-115
-185
-665
-450
-980
-503
-987
-341
-748
-860
-278
-935
-520
-32
-591
-81
-629
-409
-270
-102
-69
-304
-466
-124
-740
-217
-836
-339
-150
-261
-929
-694
-385
-384
-803
-488
-220
-151
-6
-798
-534
-846
-368
-403
-369
-604
-130
-459
-147
-357
-311
-193
-398
-749
-970
-274
-477
-1014
-659
-209
-803
-950
-528
-586
-303
-947
-1028
-698
-81
-682`);

console.log(`result ${result}`);


module.exports = stepCalculator;
