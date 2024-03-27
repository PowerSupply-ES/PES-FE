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
        height: fit-content;
        padding: 7px 30px;
        box-shadow: rgb(204, 201, 201) 1px 1px;
        color: white;
        border-radius: 8px;
        font-size: 17px;
        font-weight: bold;
        text-align: center;
        border: none;
        transition: background-color 0.3s ease 0s;
        pointer-events: auto;
        width: 48%;
    }

    .select_box {
        border-radius: 10px;
        margin-bottom: 10px;
        align-items: center;
        height: 40px;
        display: flex;
        width: 50%;
    }
`;