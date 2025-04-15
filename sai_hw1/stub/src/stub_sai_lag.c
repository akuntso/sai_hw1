#include "sai.h"
#include "stub_sai.h"
#include "assert.h"
#include <stdio.h>


#define MAX_NUMBER_OF_LAG_MEMBERS 16
#define MAX_NUMBER_OF_LAGS 5

// Forward declarations for vendor attribute getters
sai_status_t get_lag_attribute(
    const sai_object_key_t *key,
    sai_attribute_value_t *value,
    uint32_t attr_index,
    vendor_cache_t *cache,
    void *arg);

sai_status_t get_lag_member_attribute(
    const sai_object_key_t *key,
    sai_attribute_value_t *value,
    uint32_t attr_index,
    vendor_cache_t *cache,
    void *arg);

typedef struct _lag_member_db_entry_t {
    bool            is_ised;
    sai_object_id_t port_oid;
    sai_object_id_t lag_oid;
} lag_member_db_entry_t;

typedef struct _lag_db_entry_t {
    bool            is_used;
    sai_object_id_t members_ids[MAX_NUMBER_OF_LAG_MEMBERS];
} lag_db_entry_t;

struct lag_db_t {
    lag_db_entry_t        lags[MAX_NUMBER_OF_LAGS];
    lag_member_db_entry_t members[MAX_NUMBER_OF_LAG_MEMBERS];
} lag_db;

static const sai_attribute_entry_t lag_attribs[] = {
    { SAI_LAG_ATTR_PORT_LIST, false, false, false, true,
      "List of ports in LAG", SAI_ATTR_VAL_TYPE_OBJLIST },
    { END_FUNCTIONALITY_ATTRIBS_ID, false, false, false, false,
      "", SAI_ATTR_VAL_TYPE_UNDETERMINED }
};

static const sai_attribute_entry_t lag_member_attribs[] = {
    { SAI_LAG_MEMBER_ATTR_LAG_ID, true, true, false, true,
      "LAG ID", SAI_ATTR_VAL_TYPE_OID },
    { SAI_LAG_MEMBER_ATTR_PORT_ID, true, true, false, true,
      "PORT ID", SAI_ATTR_VAL_TYPE_OID },
    { END_FUNCTIONALITY_ATTRIBS_ID, false, false, false, false,
      "", SAI_ATTR_VAL_TYPE_UNDETERMINED }
};

static const sai_vendor_attribute_entry_t lag_member_vendor_attribs[] = {
    { SAI_LAG_MEMBER_ATTR_LAG_ID,
      { true, false, false, true },
      { true, false, false, true },
      get_lag_member_attribute, (void*) SAI_LAG_MEMBER_ATTR_LAG_ID,
      NULL, NULL },
    { SAI_LAG_MEMBER_ATTR_PORT_ID,
      { true, false, false, true },
      { true, false, false, true },
      get_lag_member_attribute, (void*) SAI_LAG_MEMBER_ATTR_PORT_ID,
      NULL, NULL }
};

static const sai_vendor_attribute_entry_t lag_vendor_attribs[] = {
    { SAI_LAG_ATTR_PORT_LIST,
      { true, false, false, true },
      { true, false, false, true },
      get_lag_attribute, (void*) SAI_LAG_ATTR_PORT_LIST,
      NULL, NULL }
};

sai_status_t stub_create_lag(
    _Out_ sai_object_id_t* lag_id,
    _In_ uint32_t attr_count,
    _In_ sai_attribute_t *attr_list)
{
    sai_status_t status;

    uint32_t ii = 0;
    for (; ii < MAX_NUMBER_OF_LAGS; ++ii  ) {
        if (!lag_db.lags[ii].is_used) {
            break;
        }
    }
    if (ii == MAX_NUMBER_OF_LAGS) {
        printf("Cannot create LAG: limit is reached\n");
        return SAI_STATUS_FAILURE;
    }
    uint32_t lag_db_id = ii;
    lag_db.lags[lag_db_id].is_used = true;

    status = check_attribs_metadata(attr_count, attr_list, lag_attribs, lag_vendor_attribs, SAI_OPERATION_CREATE);
    if (status != SAI_STATUS_SUCCESS) {
        printf("Failed attributes check\n");
        return status;
    }

    status = stub_create_object(SAI_OBJECT_TYPE_LAG, lag_db_id, lag_id);
    if (status != SAI_STATUS_SUCCESS) {
        printf("Cannot create a LAG OID\n");
        return status;
    }

    char list_str[MAX_LIST_VALUE_STR_LEN];                                                       
    sai_attr_list_to_str(attr_count, attr_list, lag_attribs, MAX_LIST_VALUE_STR_LEN, list_str);
    printf("CREATE LAG -> lag_id: 0x%lX lag_db_id: %d (%s)\n", *lag_id, lag_db_id, list_str);
    return SAI_STATUS_SUCCESS;
}

sai_status_t stub_remove_lag(
    _In_ sai_object_id_t  lag_id)
{   
    sai_status_t status;
    uint32_t     lag_db_id;
    status = stub_object_to_type(lag_id, SAI_OBJECT_TYPE_LAG, &lag_db_id);
    if (status != SAI_STATUS_SUCCESS) {
        printf("Cannot get LAG DB ID.\n");
        return status;
    }
    lag_db.lags[lag_db_id].is_used = false;
    memset(lag_db.lags[lag_db_id].members_ids, 0, sizeof(lag_db.lags[lag_db_id].members_ids));
    printf("REMOVE LAG -> lag_id: 0x%lX lag_db_id %d\n", lag_id, lag_db_id);
    return SAI_STATUS_SUCCESS;
}

sai_status_t stub_set_lag_attribute(
    _In_ sai_object_id_t  lag_id,
    _In_ const sai_attribute_t *attr)
{   
    printf("SET LAG ATTRIBUTE 0x%lX, Attr Count: %d\n", lag_id, attr->id);
    return SAI_STATUS_SUCCESS;
}

sai_status_t get_lag_attribute(
    _In_ const sai_object_key_t   *key,
    _Inout_ sai_attribute_value_t *value,
    _In_ uint32_t                  attr_index,
    _Inout_ vendor_cache_t        *cache,
    void                          *arg)
{  
    sai_object_id_t lag_oid = key->object_id;

    for (int i = 0; i < MAX_NUMBER_OF_LAG_MEMBERS; i++) {
        if (lag_db.members[i].lag_oid == lag_oid) {
            printf("Found member for LAG  0x%lx port_oid 0x%lx\n", lag_oid, lag_db.members[i].port_oid);
        }
    }
    return SAI_STATUS_SUCCESS; 
}

sai_status_t stub_create_lag_member(
    _Out_ sai_object_id_t* lag_member_id,
    _In_ uint32_t attr_count,
    _In_ sai_attribute_t *attr_list)
{
    uint32_t ii = 0;
    for (; ii < MAX_NUMBER_OF_LAG_MEMBERS; ++ii  ) {
        if (!lag_db.members[ii].is_ised) {
            break;
        }
    }
    if (ii == MAX_NUMBER_OF_LAG_MEMBERS) {
        printf("Cannot create LAG MEMBER: limit is reached\n");
        return SAI_STATUS_FAILURE;
    }
    uint32_t lag_member_db_id = ii;
    lag_db.members[lag_member_db_id].is_ised = true;

    sai_status_t status;
    status = check_attribs_metadata(attr_count, attr_list, lag_member_attribs, lag_member_vendor_attribs, SAI_OPERATION_CREATE);
    if (status != SAI_STATUS_SUCCESS) {
        printf("Failed attributes check\n");
        return status;
    }

    const sai_attribute_value_t *lag_id;
    uint32_t lag_id_idx;
    status = find_attrib_in_list(attr_count, attr_list, SAI_LAG_MEMBER_ATTR_LAG_ID, &lag_id, &lag_id_idx);
    if (status != SAI_STATUS_SUCCESS) {
        printf("LAG_ID attribute not found.\n");
        return status;
    }
    lag_db.members[lag_member_db_id].lag_oid = lag_id->oid;

    const sai_attribute_value_t *port_id;
    uint32_t port_id_idx;
    status = find_attrib_in_list(attr_count, attr_list, SAI_LAG_MEMBER_ATTR_PORT_ID, &port_id, &port_id_idx);
    if (status != SAI_STATUS_SUCCESS) {
        printf("PORT_ID attribute not found.\n");
        return status;
    }
    lag_db.members[lag_member_db_id].port_oid = port_id->oid;

    status = stub_create_object(SAI_OBJECT_TYPE_LAG_MEMBER, lag_member_db_id, lag_member_id);
    if (status != SAI_STATUS_SUCCESS) {
        printf("Cannot create a LAG_MEMBER OID\n");
        return status;
    }

    char list_str[MAX_LIST_VALUE_STR_LEN];                                                       
    sai_attr_list_to_str(attr_count, attr_list, lag_member_attribs, MAX_LIST_VALUE_STR_LEN, list_str);
    printf("CREATE LAG MEMBER -> lag_member_id: 0x%lX lag_member_db_id: %d (%s)\n", *lag_member_id, lag_member_db_id, list_str);
    return SAI_STATUS_SUCCESS;

}

sai_status_t stub_remove_lag_member(
    _In_ sai_object_id_t  lag_member_id)
{   
    sai_status_t status;
    uint32_t     lag_member_db_id;
    status = stub_object_to_type(lag_member_id, SAI_OBJECT_TYPE_LAG_MEMBER, &lag_member_db_id);
    if (status != SAI_STATUS_SUCCESS) {
        printf("Cannot get LAG MEMBER DB ID.\n");
        return status;
    }
    lag_db.members[lag_member_db_id].is_ised = false;
    lag_db.members[lag_member_db_id].port_oid = 0;
    lag_db.members[lag_member_db_id].lag_oid = 0;
    printf("REMOVE LAG_MEMBER -> lag_member_id: 0x%lX, lag_member_db_id: %d\n", lag_member_id, lag_member_db_id);
    return SAI_STATUS_SUCCESS;
}

sai_status_t stub_set_lag_member_attribute(
    _In_ sai_object_id_t  lag_member_id,
    _In_ const sai_attribute_t *attr)
{   
    printf("SET LAG_MEMBER ATTRIBUTE FOR LAG_MEMBER: 0x%lX, Attr Count: %d\n", lag_member_id, attr->id);
    return SAI_STATUS_SUCCESS;
}

sai_status_t get_lag_member_attribute(_In_ const sai_object_key_t   *key,
    _Inout_ sai_attribute_value_t *value,
    _In_ uint32_t                  attr_index,
    _Inout_ vendor_cache_t        *cache,
    void                          *arg)
{
    sai_status_t status;
    uint32_t     db_index;
    sai_object_id_t lag_member_id = key->object_id;
    // assert((SAI_LAG_MEMBER_ATTR_LAG_ID == (int64_t)arg));
    // assert((SAI_LAG_MEMBER_ATTR_PORT_ID == (int64_t)arg));

    status = stub_object_to_type(key->object_id, SAI_OBJECT_TYPE_LAG_MEMBER, &db_index);
    if (status != SAI_STATUS_SUCCESS) {
        printf("Cannot get LAG DB index.\n");
        return status;
    }

    switch ((int64_t)arg) {
    case SAI_LAG_MEMBER_ATTR_LAG_ID:
        value->oid = lag_db.members[db_index].lag_oid;
        printf("GET LAG_MEMBER ATTR: 0x%lX -> LAG_ID: 0x%lX\n", lag_member_id, value->oid);
        break;
    case SAI_LAG_MEMBER_ATTR_PORT_ID:
        value->oid = lag_db.members[db_index].port_oid;
        printf("GET LAG_MEMBER ATTR: 0x%lX -> PORT_ID: 0x%lX\n", lag_member_id, value->oid);
        break;
    default:
        printf("Got unexpected attribute ID\n");
        return SAI_STATUS_FAILURE;
    }
    
    return SAI_STATUS_SUCCESS;
    
}

sai_status_t stub_get_lag_attribute(
    sai_object_id_t lag_id,
    uint32_t attr_count,
    sai_attribute_t *attr_list)
{
    const sai_object_key_t key = { .object_id = lag_id };
    return sai_get_attributes(&key, NULL, lag_attribs, lag_vendor_attribs, attr_count, attr_list);
}

sai_status_t stub_get_lag_member_attribute(
    sai_object_id_t lag_member_id,
    uint32_t attr_count,
    sai_attribute_t *attr_list)
{
    const sai_object_key_t key = { .object_id = lag_member_id };
    return sai_get_attributes(&key, NULL, lag_member_attribs, lag_member_vendor_attribs, attr_count, attr_list);
}

const sai_lag_api_t lag_api = {
    stub_create_lag,
    stub_remove_lag,
    stub_set_lag_attribute,
    stub_get_lag_attribute,
    stub_create_lag_member,
    stub_remove_lag_member,
    stub_set_lag_member_attribute,
    stub_get_lag_member_attribute
};
