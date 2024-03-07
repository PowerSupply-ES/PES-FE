import React, { useEffect, useState } from 'react';

function MemberStatus({ children }) {
  const [memberStatus, setMemberStatus] = useState(null);

  const uri = '../api/exp';
  const memberEmail = sessionStorage.getItem('memberEmail');

  useEffect(() => {

    const userInfo = async () => {
        fetch(`${uri}?memberEmail=${memberEmail}`, {
          method: 'GET',
        })
          .then(response => {
            if (!response.ok) {
              console.log('서버응답:', response);
              throw new Error(`데이터 가져오기 실패: ${response.status} ${response.statusText}`);
            }
            return response.json();
          })
          .then(data => {
            setMemberStatus(data.memberStatus);
          })
          .catch(error => {
            console.error('데이터 가져오기 실패:', error);
          });
    };
    
    userInfo();
  }, []);

  return children(memberStatus);
}

export default MemberStatus;