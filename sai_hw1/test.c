#include <stdio.h>
#include "sai.h"

const char* test_profile_get_value(
    _In_ sai_switch_profile_id_t profile_id,
    _In_ const char* variable)
{
    return 0;
}

int test_profile_get_next_value(
    _In_ sai_switch_profile_id_t profile_id,
    _Out_ const char** variable,
    _Out_ const char** value)
{
    return -1;
}

const service_method_table_t test_services = {
    test_profile_get_value,
    test_profile_get_next_value
};


int main()
{
    sai_status_t              status;
    sai_lag_api_t             *lag_api;
    sai_object_id_t           lag_oid1, lag_oid2;
    sai_object_id_t           lag_member_oid1, lag_member_oid2, lag_member_oid3, lag_member_oid4;
    sai_attribute_t           lag_attr;
    sai_attribute_t           lag_member_attr[2];
    sai_object_list_t         port_list[64];

    status = sai_api_initialize(0, &test_services);


    status = sai_api_query(SAI_API_LAG, (void**)&lag_api);
    if (status != SAI_STATUS_SUCCESS) {
        printf("Failed to query LAG API, status=%d\n", status);
        return 1;
    }

    status = lag_api->create_lag(&lag_oid1, 0, NULL);
    if (status != SAI_STATUS_SUCCESS) {
        printf("Failed to create a LAG #1, status=%d\n", status);
        return 1;
    }
    printf("CREATE LAG #1: 0x%lX\n", lag_oid1);

    status = lag_api->create_lag(&lag_oid2, 0, NULL);
    if (status != SAI_STATUS_SUCCESS) {
        printf("Failed to create a LAG #2, status=%d\n", status);
        return 1;
    }
    printf("CREATE LAG #2: 0x%lX\n", lag_oid2);

    status = lag_api->create_lag_member(&lag_member_oid1, 0, NULL);
    if (status != SAI_STATUS_SUCCESS) {
        printf("Failed to create a LAG MEMBER, status=%d\n", status);
        return 1;
    }
    printf("CREATE LAG_MEMBER #1: 0x%lX\n", lag_member_oid1);

    status = lag_api->create_lag_member(&lag_member_oid2, 0, NULL);
    if (status != SAI_STATUS_SUCCESS) {
        printf("Failed to create a LAG MEMBER, status=%d\n", status);
        return 1;
    }
    printf("CREATE LAG_MEMBER #2: 0x%lX\n", lag_member_oid2);
    /*
    status = lag_api->remove_lag_member(lag_member_oid1);
    if (status != SAI_STATUS_SUCCESS) {
        printf("Failed to remove a LAG MEMBER, status=%d\n", status);
        return 1;
    }

    status = lag_api->remove_lag(lag_oid1);
    if (status != SAI_STATUS_SUCCESS) {
        printf("Failed to remove a LAG, status=%d\n", status);
        return 1;
    }
    */



    status = sai_api_uninitialize();

    return 0;
}
