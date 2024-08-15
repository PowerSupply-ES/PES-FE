import styled from "styled-components";

export const StyledListPage = styled.div`

    .list_container {
        margin-right: 5%;
        width: 60%;
    }

    .ranking_container {
        width: 20%;
    }

    .container_header {
        margin-bottom: 20px;
        font-weight: bold;
        align-items: center;
        font-size: 30px;
        display: flex;
        width: 100%;
    }

    .student_container {
        justify-content: space-between;
        margin-bottom: 10px;
        align-items: center;
        font-size: 18px;
        display: flex;
        width: 100%;
    }

    .student_button {
        width: 48%;
        height: fit-content;
        padding: 7px 30px;
        box-shadow: rgb(204, 201, 201) 1px 1px;
        border-radius: 8px;
        font-size: 17px;
        font-weight: bold;
        text-align: center;
    }

    .select_box {
        border-radius: 10px;
        margin-bottom: 10px;
        align-items: center;
        height: 40px;
        display: flex;
        width: 50%;
    }

    .ranking-list {
        max-height: 400px;
        overflow-y: auto;
        background-color: #f9f9f9;
        border-radius: 10px;
        padding: 10px;
    }
    .problem_wrapper{
        height: fit-content;
        background-color: white;
        padding: 12px;
        border-radius: 8px;
    }

`;