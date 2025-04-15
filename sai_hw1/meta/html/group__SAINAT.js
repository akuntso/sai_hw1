var group__SAINAT =
[
    [ "_sai_nat_entry_key_t", "struct__sai__nat__entry__key__t.html", [
      [ "dst_ip", "struct__sai__nat__entry__key__t.html#aa5e234ccf7af3c044f605d9b4d18eff2", null ],
      [ "l4_dst_port", "struct__sai__nat__entry__key__t.html#a43919d081014aeae7ba864ab51906f6c", null ],
      [ "l4_src_port", "struct__sai__nat__entry__key__t.html#ac9f8559f754e220a7b9f6e9408159d49", null ],
      [ "proto", "struct__sai__nat__entry__key__t.html#ace17cb9dd5e0fcac53a9da79470a5ce6", null ],
      [ "src_ip", "struct__sai__nat__entry__key__t.html#a8e8c0d128bb0948e66866918a7404680", null ]
    ] ],
    [ "_sai_nat_entry_mask_t", "struct__sai__nat__entry__mask__t.html", [
      [ "dst_ip", "struct__sai__nat__entry__mask__t.html#a20999e4a8a3833ff5c63002435333e01", null ],
      [ "l4_dst_port", "struct__sai__nat__entry__mask__t.html#a16fd8f05fb0645e4b86f9c8e3664dc6c", null ],
      [ "l4_src_port", "struct__sai__nat__entry__mask__t.html#a84fd6693a3c89d5fb65e6a2b1e9c820e", null ],
      [ "proto", "struct__sai__nat__entry__mask__t.html#af9910dc3d980757258d023c847e27a37", null ],
      [ "src_ip", "struct__sai__nat__entry__mask__t.html#a4cc13399f838f0f0c88909c2a999bb1a", null ]
    ] ],
    [ "_sai_nat_entry_data_t", "struct__sai__nat__entry__data__t.html", [
      [ "key", "struct__sai__nat__entry__data__t.html#a8e7e6d7bc1db1005e1e18073570a433f", null ],
      [ "mask", "struct__sai__nat__entry__data__t.html#afb4a7ff81d3cf17de653220c73fc5326", null ]
    ] ],
    [ "_sai_nat_entry_t", "struct__sai__nat__entry__t.html", [
      [ "data", "struct__sai__nat__entry__t.html#a91eeaab8e211b53d04d9fb6e77e78872", null ],
      [ "nat_type", "struct__sai__nat__entry__t.html#ad6be4c37dc4c3b8ef46cda30a4fd94a3", null ],
      [ "switch_id", "struct__sai__nat__entry__t.html#a1a7be680f62b5981c404a74d3213a0c2", null ],
      [ "vr_id", "struct__sai__nat__entry__t.html#ac78c44e1c2fcf7977311a0de15bd63a6", null ]
    ] ],
    [ "_sai_nat_event_notification_data_t", "struct__sai__nat__event__notification__data__t.html", [
      [ "event_type", "struct__sai__nat__event__notification__data__t.html#a96781e740560f879f8bce10ca851bfb9", null ],
      [ "nat_entry", "struct__sai__nat__event__notification__data__t.html#a97cf174c269943d38c2666b5df6c9fc1", null ]
    ] ],
    [ "_sai_nat_api_t", "struct__sai__nat__api__t.html", [
      [ "create_nat_entries", "struct__sai__nat__api__t.html#ae1d11c33ea33e0f15871ad7f88053b1e", null ],
      [ "create_nat_entry", "struct__sai__nat__api__t.html#ac89009f191fa0f3f7dfc38f9a4ed6a55", null ],
      [ "create_nat_zone_counter", "struct__sai__nat__api__t.html#a55043c997ee4d62130521bdbb24a08bc", null ],
      [ "get_nat_entries_attribute", "struct__sai__nat__api__t.html#a5a00a1bf424b3b7de1658339d446d46d", null ],
      [ "get_nat_entry_attribute", "struct__sai__nat__api__t.html#ac044c8d84fd42f058c29d62a4adfbcaf", null ],
      [ "get_nat_zone_counter_attribute", "struct__sai__nat__api__t.html#ae037ce2a72b4a1171382a38b7a0b5e39", null ],
      [ "remove_nat_entries", "struct__sai__nat__api__t.html#a7b7b2820b657e26591aee4097b08520e", null ],
      [ "remove_nat_entry", "struct__sai__nat__api__t.html#ab5205abdd8b2672b05dfac525d5835db", null ],
      [ "remove_nat_zone_counter", "struct__sai__nat__api__t.html#a99c62fd3fcf1c36fdfda4061769e1fed", null ],
      [ "set_nat_entries_attribute", "struct__sai__nat__api__t.html#afd499a725354966aab41b9d1905b65ce", null ],
      [ "set_nat_entry_attribute", "struct__sai__nat__api__t.html#a9a7e891e806fc651f6d3a637757583e8", null ],
      [ "set_nat_zone_counter_attribute", "struct__sai__nat__api__t.html#a6016db3571ad37ec76dbc97322c17508", null ]
    ] ],
    [ "sai_bulk_create_nat_entry_fn", "group__SAINAT.html#ga9513f80b6e1ab450bf14352abb82a76d", null ],
    [ "sai_bulk_get_nat_entry_attribute_fn", "group__SAINAT.html#gaa21ecc79a22b40ba8bc905160de0f30c", null ],
    [ "sai_bulk_remove_nat_entry_fn", "group__SAINAT.html#gafba3d857f6e9ac3a1fe8111000eacf3b", null ],
    [ "sai_bulk_set_nat_entry_attribute_fn", "group__SAINAT.html#ga748ca64c85323616c8518ade1ac2a89b", null ],
    [ "sai_create_nat_entry_fn", "group__SAINAT.html#gac987ec3839ada7d74fea5d19cb61603d", null ],
    [ "sai_create_nat_zone_counter_fn", "group__SAINAT.html#ga4ddccd58f3cf434b7de1d7879c374386", null ],
    [ "sai_get_nat_entry_attribute_fn", "group__SAINAT.html#ga12915b48e93406eb112eff72c27e8548", null ],
    [ "sai_get_nat_zone_counter_attribute_fn", "group__SAINAT.html#ga7283024e727008551d3f4b1c85a918ca", null ],
    [ "sai_nat_api_t", "group__SAINAT.html#ga803bbe61a702890192b0be1ca85a58b1", null ],
    [ "sai_nat_entry_attr_t", "group__SAINAT.html#ga4a31c332c3618627ff910cfc68c289ef", null ],
    [ "sai_nat_entry_key_t", "group__SAINAT.html#gacf40fe2c151c34cbdcbd913ada2af213", null ],
    [ "sai_nat_entry_mask_t", "group__SAINAT.html#gafaa424fe7cb9ce82af21848c9189ad8b", null ],
    [ "sai_nat_entry_t", "group__SAINAT.html#gaa6147263f5a705af4580622f3caba4f3", null ],
    [ "sai_nat_event_notification_data_t", "group__SAINAT.html#ga775c97f0ca14a2a2bbc2d0b33d5095aa", null ],
    [ "sai_nat_event_notification_fn", "group__SAINAT.html#gae59b47d28e106ffcb58d9df9396f1b81", null ],
    [ "sai_nat_event_t", "group__SAINAT.html#gac96bf0bde33a9e18a05286d58c7e7d49", null ],
    [ "sai_nat_type_t", "group__SAINAT.html#gaa42d420722ebc7306da3a3fb2a14e764", null ],
    [ "sai_nat_zone_counter_attr_t", "group__SAINAT.html#ga6c558d72f6a3136dad8efd51df5ed866", null ],
    [ "sai_remove_nat_entry_fn", "group__SAINAT.html#ga8532e36e56de2ab6e54c5d74a06bc9d4", null ],
    [ "sai_remove_nat_zone_counter_fn", "group__SAINAT.html#ga9f75effcc13a32b97696a1c2adb5119d", null ],
    [ "sai_set_nat_entry_attribute_fn", "group__SAINAT.html#ga3b6b4552d9a2270093e60272dc340080", null ],
    [ "sai_set_nat_zone_counter_attribute_fn", "group__SAINAT.html#gaa3434aa8d24046e4f306f4e7667339ed", null ],
    [ "_sai_nat_entry_attr_t", "group__SAINAT.html#ga51fa4d72f69156ad4cbf96b4ae60ae3d", [
      [ "SAI_NAT_ENTRY_ATTR_START", "group__SAINAT.html#gga51fa4d72f69156ad4cbf96b4ae60ae3dafa1080debe7c97fb004f92592fc833af", null ],
      [ "SAI_NAT_ENTRY_ATTR_NAT_TYPE", "group__SAINAT.html#gga51fa4d72f69156ad4cbf96b4ae60ae3daac32d3e659c272432bc60ed0d00c6bd2", null ],
      [ "SAI_NAT_ENTRY_ATTR_SRC_IP", "group__SAINAT.html#gga51fa4d72f69156ad4cbf96b4ae60ae3da5912e4e666d990a9f8e2d8527450e2c4", null ],
      [ "SAI_NAT_ENTRY_ATTR_SRC_IP_MASK", "group__SAINAT.html#gga51fa4d72f69156ad4cbf96b4ae60ae3daed008eb230a09e2d3355d587bd8cf901", null ],
      [ "SAI_NAT_ENTRY_ATTR_VR_ID", "group__SAINAT.html#gga51fa4d72f69156ad4cbf96b4ae60ae3da9311fd59b9f2f33867ca9567240c0e1a", null ],
      [ "SAI_NAT_ENTRY_ATTR_DST_IP", "group__SAINAT.html#gga51fa4d72f69156ad4cbf96b4ae60ae3da62e5aa4708768f09569e788e47d4d735", null ],
      [ "SAI_NAT_ENTRY_ATTR_DST_IP_MASK", "group__SAINAT.html#gga51fa4d72f69156ad4cbf96b4ae60ae3daef4c24eddeb29a9dbffb20366640da92", null ],
      [ "SAI_NAT_ENTRY_ATTR_L4_SRC_PORT", "group__SAINAT.html#gga51fa4d72f69156ad4cbf96b4ae60ae3da58c0396363e1ad456f9a1eb3bd569d83", null ],
      [ "SAI_NAT_ENTRY_ATTR_L4_DST_PORT", "group__SAINAT.html#gga51fa4d72f69156ad4cbf96b4ae60ae3da6cebe84be894f87159f9ea8e143f439c", null ],
      [ "SAI_NAT_ENTRY_ATTR_ENABLE_PACKET_COUNT", "group__SAINAT.html#gga51fa4d72f69156ad4cbf96b4ae60ae3da5d2e967baa457fbbdf41f03cbb773319", null ],
      [ "SAI_NAT_ENTRY_ATTR_PACKET_COUNT", "group__SAINAT.html#gga51fa4d72f69156ad4cbf96b4ae60ae3dae5f95406b00a4a97a1964765239d7c34", null ],
      [ "SAI_NAT_ENTRY_ATTR_ENABLE_BYTE_COUNT", "group__SAINAT.html#gga51fa4d72f69156ad4cbf96b4ae60ae3da71b8094ce13664bc7f2f1caf754f6114", null ],
      [ "SAI_NAT_ENTRY_ATTR_BYTE_COUNT", "group__SAINAT.html#gga51fa4d72f69156ad4cbf96b4ae60ae3da5d4d00426f8a9322442933fba472af4b", null ],
      [ "SAI_NAT_ENTRY_ATTR_HIT_BIT_COR", "group__SAINAT.html#gga51fa4d72f69156ad4cbf96b4ae60ae3da81828f70d3d5853183dabb6bf953ebb1", null ],
      [ "SAI_NAT_ENTRY_ATTR_HIT_BIT", "group__SAINAT.html#gga51fa4d72f69156ad4cbf96b4ae60ae3dac98964077318c1bbc3521ddc985ed845", null ],
      [ "SAI_NAT_ENTRY_ATTR_AGING_TIME", "group__SAINAT.html#gga51fa4d72f69156ad4cbf96b4ae60ae3da943af1c6ccc3310fa56ec32c799389d7", null ],
      [ "SAI_NAT_ENTRY_ATTR_END", "group__SAINAT.html#gga51fa4d72f69156ad4cbf96b4ae60ae3dad5db781c1b8a3c9e1e4180c28106af88", null ],
      [ "SAI_NAT_ENTRY_ATTR_CUSTOM_RANGE_START", "group__SAINAT.html#gga51fa4d72f69156ad4cbf96b4ae60ae3da591678441d6272bf5acb567dbd4d5038", null ],
      [ "SAI_NAT_ENTRY_ATTR_CUSTOM_RANGE_END", "group__SAINAT.html#gga51fa4d72f69156ad4cbf96b4ae60ae3da2c38a2fea3632e245fb6919f98aec33a", null ]
    ] ],
    [ "_sai_nat_event_t", "group__SAINAT.html#ga1517c5f6f1db5d8e8e96c94988cf8661", [
      [ "SAI_NAT_EVENT_NONE", "group__SAINAT.html#gga1517c5f6f1db5d8e8e96c94988cf8661a5e94132372f054f8a3bf3e45915179d3", null ],
      [ "SAI_NAT_EVENT_AGED", "group__SAINAT.html#gga1517c5f6f1db5d8e8e96c94988cf8661ae15c8a3aed1ae29f8328b3752b64f6fc", null ]
    ] ],
    [ "_sai_nat_type_t", "group__SAINAT.html#ga4d3e682beb061a94e9a372988f3621a1", [
      [ "SAI_NAT_TYPE_NONE", "group__SAINAT.html#gga4d3e682beb061a94e9a372988f3621a1a07528784900be413113016bcd996c91e", null ],
      [ "SAI_NAT_TYPE_SOURCE_NAT", "group__SAINAT.html#gga4d3e682beb061a94e9a372988f3621a1a15fca235964741d262207e39df8dcd1c", null ],
      [ "SAI_NAT_TYPE_DESTINATION_NAT", "group__SAINAT.html#gga4d3e682beb061a94e9a372988f3621a1aa1649810d6f3e612843c2d00cd4fcc6a", null ],
      [ "SAI_NAT_TYPE_DOUBLE_NAT", "group__SAINAT.html#gga4d3e682beb061a94e9a372988f3621a1a79d2fd31bd9ad4bf6fd1c4537f5db2c6", null ],
      [ "SAI_NAT_TYPE_DESTINATION_NAT_POOL", "group__SAINAT.html#gga4d3e682beb061a94e9a372988f3621a1aa4525ce33c0283ec4374006d48aa6a29", null ]
    ] ],
    [ "_sai_nat_zone_counter_attr_t", "group__SAINAT.html#gaa821dfc74349eea6183add5b6d1aaa60", [
      [ "SAI_NAT_ZONE_COUNTER_ATTR_START", "group__SAINAT.html#ggaa821dfc74349eea6183add5b6d1aaa60ab36b7d8cb55b365511586156c60ba085", null ],
      [ "SAI_NAT_ZONE_COUNTER_ATTR_NAT_TYPE", "group__SAINAT.html#ggaa821dfc74349eea6183add5b6d1aaa60ae662ee73c247d9a2389fc7e15d0002ec", null ],
      [ "SAI_NAT_ZONE_COUNTER_ATTR_ZONE_ID", "group__SAINAT.html#ggaa821dfc74349eea6183add5b6d1aaa60a497d0750b811d5b6785866b18a62d52b", null ],
      [ "SAI_NAT_ZONE_COUNTER_ATTR_ENABLE_DISCARD", "group__SAINAT.html#ggaa821dfc74349eea6183add5b6d1aaa60ad2f4450ec0a41075cdc84eade90000e1", null ],
      [ "SAI_NAT_ZONE_COUNTER_ATTR_DISCARD_PACKET_COUNT", "group__SAINAT.html#ggaa821dfc74349eea6183add5b6d1aaa60a02cc213feb7c58c1d6bb50a9d8b2e82a", null ],
      [ "SAI_NAT_ZONE_COUNTER_ATTR_ENABLE_TRANSLATION_NEEDED", "group__SAINAT.html#ggaa821dfc74349eea6183add5b6d1aaa60ae24fe55af7e1a621af421e1b5d4f8026", null ],
      [ "SAI_NAT_ZONE_COUNTER_ATTR_TRANSLATION_NEEDED_PACKET_COUNT", "group__SAINAT.html#ggaa821dfc74349eea6183add5b6d1aaa60aae2af710e4230dc5a536929394f17450", null ],
      [ "SAI_NAT_ZONE_COUNTER_ATTR_ENABLE_TRANSLATIONS", "group__SAINAT.html#ggaa821dfc74349eea6183add5b6d1aaa60ab19f26eae1f702a84552df813581c89a", null ],
      [ "SAI_NAT_ZONE_COUNTER_ATTR_TRANSLATIONS_PACKET_COUNT", "group__SAINAT.html#ggaa821dfc74349eea6183add5b6d1aaa60a6f3bacfd38b3441130f517ff9dd7fe6e", null ],
      [ "SAI_NAT_ZONE_COUNTER_ATTR_END", "group__SAINAT.html#ggaa821dfc74349eea6183add5b6d1aaa60a0480c4fc98604f41471072dcd4117bdf", null ],
      [ "SAI_NAT_ZONE_COUNTER_ATTR_CUSTOM_RANGE_START", "group__SAINAT.html#ggaa821dfc74349eea6183add5b6d1aaa60a16d190f67c05375a4f8abee31a36411e", null ],
      [ "SAI_NAT_ZONE_COUNTER_ATTR_CUSTOM_RANGE_END", "group__SAINAT.html#ggaa821dfc74349eea6183add5b6d1aaa60a68181a6674f378cfe589daac0ca04e34", null ]
    ] ]
];