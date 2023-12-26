# Ollama GUI Client

## Ollama 서버를 서비스로 재등록하기

```bash
sudo systemctl stop ollama
sudo cp ollama.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl start ollama
sudo systemctl status ollama

export OLLAMA_HOST=129.254.233.72:11434
export OLLAMA_ORIGINS=http://*:8086
ollama pull llama2
ollama pull mistral
ollama pull orca2
```

## Ollama client 서비스 등록하기

```bash
sudo cp ollama_gui_client.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable ollama_gui_client
sudo systemctl start ollama_gui_client
sudo systemctl status ollama_gui_client
sudo ufw allow 8086
```

## 서버로 실행하기

```bash
export OLLAMA_HOST=129.254.233.72:11434
export OLLAMA_ORIGINS=http://*:8086
ollama serve
ollama pull mistral
ollama pull orca2
```

## 포트 허용하기

```bash
sudo ufw allow 8086
```

## 실행 확인하기

- <http://129.254.233.72:11434/>
