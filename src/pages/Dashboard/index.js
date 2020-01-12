import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import api from '~/services/api';

import { Container, EmptyList, Meetup, MeetupList } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function getMeetups() {
      const response = await api.get('schedule');

      const data = response.data.map(meetup => ({
        ...meetup,
        dateFormatted: format(
          parseISO(meetup.date),
          "d 'de' MMMM', às' HH'h'",
          {
            locale: pt,
          }
        ),
      }));

      setMeetups(data);
    }

    getMeetups();
  }, []);

  return (
    <Container>
      <div>
        <h1>Meus meetups</h1>
        <Link to="meetup">
          <MdAddCircleOutline size={20} color="#fff" />
          Novo meetup
        </Link>
      </div>
      {meetups.length ? (
        <MeetupList>
          {meetups.map(meetup => (
            <Meetup data-testid={meetup.id} key={meetup.id}>
              <Link to={`/meetup-detail/${meetup.id}`}>
                <p>{meetup.title}</p>
                <div>
                  <span>{meetup.dateFormatted}</span>
                  <MdChevronRight size={24} color="#fff" />
                </div>
              </Link>
            </Meetup>
          ))}
        </MeetupList>
      ) : (
        <EmptyList>
          <p>Você ainda não cadastrou nenhum meetup.</p>
        </EmptyList>
      )}
    </Container>
  );
}
