/*
Progress - 
    PreviousScore = SELECT SCORE FROM USER WHERE UID = <userid>;
    CurrScore = sum(score_array)
    Progress = CurrScore - PreviousScore
    UPDATE USER SET SCORE = CurrScore WHERE UID = <userid>;

Assigning Diagnosis
    questionare score - 0-5
    if min_score 0 max_score 50 
    00-10 1
    11-20 2
    21-30 3
    31-40 4
    41-50 5

    if cat > 3 - direct assign to specialized doc
    else:
        check type
        if type == couples - couples therapy
        else - therapy options according to cat


*/

/*
Assigning Date
    occupied_day_list = select distint(day) from treatment where DID = <did>;
    display all the days NOT in occupied_day_list
    
*/