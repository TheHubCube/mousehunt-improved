export default (quests) => {
  if (! quests.QuestPollutionOutbreak) {
    return '';
  }

  const q = quests.QuestPollutionOutbreak;
  console.log(q);
  return `${q.items.crude_pollutinum_stat_item.quantity}/${q.max_pollutinum} Pollutinum, ${q.refined_pollutinum} refined`;
};
