import Team from '../team';

test('test Team add method', () => {
  const team = new Team();
  team.add('Member 1');
  expect(team.members.has('Member 1')).toBe(true);
});

test('test Team addAll method', () => {
  const team = new Team();
  team.addAll('Member 1', 'Member 2', 'Member 3');
  expect(team.members.size).toBe(3);
});

test('test Team toArray method', () => {
  const team = new Team();
  team.addAll('Member 1', 'Member 2', 'Member 3');
  const newMembers = team.toArray();
  expect(newMembers).toEqual(['Member 1', 'Member 2', 'Member 3']);
});

test('test Team add method with Error', () => {
  const team = new Team();
  team.add('Member 1');
  expect(() => team.add('Member 1')).toThrow('This member is already on your team.');
});
